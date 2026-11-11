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
      if (section && section.getBoundingClientRect().top <= 170) current = index;
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

  // Email: assemble mailto: from split data attributes on click, so the
  // full address never appears in the HTML for scrapers to harvest.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.js-email');
    if (!a) return;
    e.preventDefault();
    var d = a.dataset;
    window.location.href = 'mailto:' + d.u + '@' + d.d + '.' + d.t;
  });

  // "Copy for LLM": fetch llms.txt (the same text AI crawlers read) and copy it.
  var llm = document.querySelector('.llm-copy');
  if (llm) {
    var label = llm.querySelector('.llm-copy__label');
    var flash = function (text) {
      label.textContent = text;
      setTimeout(function () { label.textContent = 'Copy for LLM'; }, 1600);
    };
    var copyText = function (text) {
      if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
      return new Promise(function (resolve) {
        var area = document.createElement('textarea');
        area.value = text; area.setAttribute('readonly', '');
        area.style.position = 'fixed'; area.style.opacity = '0';
        document.body.appendChild(area); area.select();
        document.execCommand('copy'); area.remove(); resolve();
      });
    };
    llm.addEventListener('click', function () {
      fetch(llm.dataset.src, { cache: 'no-store' })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(copyText)
        .then(function () { flash('Copied'); })
        .catch(function () { flash('Copy failed'); });
    });
  }
})();
