/* Homepage: expand a paper card in place (figure + abstract). */
(function () {
  function setOpen(card, open) {
    var more = card.querySelector('.prow__more');
    var btn = card.querySelector('.prow__toggle');
    if (!more || !btn) return;
    if (card.getAnimations) {
      card.getAnimations({ subtree: true }).forEach(function (animation) { animation.finish(); });
    }
    var body = card.querySelector('.prow__body');
    var before = body.getBoundingClientRect();
    var height = card.getBoundingClientRect().height;
    more.hidden = !open;
    card.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Hide figure and abstract' : 'Show figure and abstract');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && card.animate) {
      var after = body.getBoundingClientRect();
      var options = { duration: 300, easing: 'cubic-bezier(.2, .7, .2, 1)' };
      var resize = card.animate([{ height: height + 'px' }, { height: card.getBoundingClientRect().height + 'px' }], options);
      card.classList.add('is-animating');
      resize.onfinish = resize.oncancel = function () { card.classList.remove('is-animating'); };
      body.animate([{ transform: 'translate(' + (before.left - after.left) + 'px, ' + (before.top - after.top) + 'px)' }, { transform: 'none' }], options);
      if (open) more.animate([{ opacity: 0 }, { opacity: 1 }], options);
    }
  }
  document.querySelectorAll('.prow--expandable').forEach(function (card) {
    card.querySelector('.prow__toggle').addEventListener('click', function () {
      setOpen(card, !card.classList.contains('is-open'));
    });
  });
  // /#paper-slug opens that card (old /publication/... pages redirect here).
  function openHash() {
    var id = location.hash.slice(1);
    var target = id && document.getElementById(id);
    if (target && target.classList.contains('prow--expandable')) {
      if (!target.classList.contains('is-open')) setOpen(target, true);
      requestAnimationFrame(function () { target.scrollIntoView({ block: 'start' }); });
    }
  }
  openHash();
  window.addEventListener('hashchange', openHash);

  var tabs = Array.from(document.querySelectorAll('.tabbar--home .tab'));
  var sections = tabs.map(function (tab) { return document.getElementById(tab.hash.slice(1)); });
  function updateTab() {
    var current = -1;
    sections.forEach(function (section, index) {
      if (section && section.getBoundingClientRect().top <= 150) current = index;
    });
    tabs.forEach(function (tab, index) {
      var active = index === current;
      tab.classList.toggle('is-current', active);
      if (active) tab.setAttribute('aria-current', 'location');
      else tab.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', updateTab, { passive: true });
  updateTab();
})();
