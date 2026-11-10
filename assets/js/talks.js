/* Speaking page: one talk on stage at a time, slide decks, click-to-play video. */
(function () {
  var root = document.querySelector('.talks');
  if (!root) return;
  root.classList.add('js');
  var stages = root.querySelectorAll('.talk-stage');
  var cards = root.querySelectorAll('.talk-card');

  function show(id, scroll) {
    var found = false;
    stages.forEach(function (s) { var on = s.id === id; s.classList.toggle('is-active', on); if (on) found = true; });
    if (!found) return;
    cards.forEach(function (c) { c.classList.toggle('is-active', c.dataset.talk === id); });
    if (scroll) {
      var top = root.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  cards.forEach(function (c) {
    c.addEventListener('click', function (e) {
      e.preventDefault();
      history.replaceState(null, '', '#' + c.dataset.talk);
      show(c.dataset.talk, true);
    });
  });
  if (location.hash) show(location.hash.slice(1), false);

  root.querySelectorAll('.deck').forEach(function (deck) {
    var stage = deck.closest('.talk-stage');
    var slides = deck.querySelectorAll('.deck__slide');
    var frames = stage.querySelectorAll('.frame');
    var label = deck.querySelector('.deck__i');
    var i = 0;
    function go(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) {
        if (k === i && s.dataset.src) { s.src = s.dataset.src; delete s.dataset.src; }
        s.classList.toggle('is-on', k === i);
      });
      frames.forEach(function (f, k) { f.classList.toggle('is-on', k === i); });
      if (frames[i]) frames[i].scrollIntoView({ block: 'nearest', inline: 'nearest' });
      label.textContent = i + 1;
    }
    deck.querySelectorAll('.deck__btn').forEach(function (b) {
      b.addEventListener('click', function () { go(i + parseInt(b.dataset.step, 10)); });
    });
    slides.forEach(function (s) { s.addEventListener('click', function () { go(i + 1); }); });
    frames.forEach(function (f) { f.addEventListener('click', function () { go(parseInt(f.dataset.go, 10)); }); });
    deck._go = function (step) { go(i + step); };
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    if (/input|textarea|select/i.test((e.target.tagName || ''))) return;
    var deck = root.querySelector('.talk-stage.is-active .deck');
    if (deck && deck._go) { e.preventDefault(); deck._go(e.key === 'ArrowRight' ? 1 : -1); }
  });

  root.querySelectorAll('.yt').forEach(function (b) {
    b.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.yt + '?autoplay=1&rel=0';
      f.title = b.getAttribute('aria-label');
      f.allow = 'autoplay; encrypted-media; picture-in-picture';
      f.allowFullscreen = true;
      f.className = 'yt__frame';
      b.replaceWith(f);
    });
  });
})();
