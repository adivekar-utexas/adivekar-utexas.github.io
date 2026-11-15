/* Homepage: expand a paper card in place (figure + abstract). */
(function () {
  // Figures inside a closed card are lazy images in a hidden block, so they
  // only start loading when the card opens. The open animation then measures
  // the card before the image exists and the card jumps when it arrives.
  // Fix: load them in the background once the page is idle, and on click wait
  // briefly for any figure that is still loading before measuring.
  function figures(card) { return Array.prototype.slice.call(card.querySelectorAll('.prow__more img')); }
  function warm() {
    document.querySelectorAll('.prow__more img').forEach(function (img) { img.loading = 'eager'; });
  }
  if (document.readyState === 'complete') setTimeout(warm, 300);
  else window.addEventListener('load', function () { setTimeout(warm, 300); });
  function ready(card) {
    var pending = figures(card).filter(function (img) { return !img.complete; });
    if (!pending.length) return Promise.resolve();
    pending.forEach(function (img) { img.loading = 'eager'; });
    var loaded = Promise.all(pending.map(function (img) {
      return img.decode ? img.decode().catch(function () {}) : Promise.resolve();
    }));
    return Promise.race([loaded, new Promise(function (r) { setTimeout(r, 400); })]);
  }
  function toggle(card, open) {
    if (open) ready(card).then(function () { setOpen(card, true); });
    else setOpen(card, false);
  }
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
      var options = { duration: 600, easing: 'cubic-bezier(.2, .7, .2, 1)' };
      var resize = card.animate([{ height: height + 'px' }, { height: card.getBoundingClientRect().height + 'px' }], options);
      card.classList.add('is-animating');
      resize.onfinish = resize.oncancel = function () { card.classList.remove('is-animating'); };
      body.animate([{ transform: 'translateX(' + (before.left - after.left) + 'px)' }, { transform: 'none' }], options);
      if (open) more.animate([{ opacity: 0 }, { opacity: 1 }], options);
    }
  }
  document.querySelectorAll('.prow--expandable').forEach(function (card) {
    card.querySelector('.prow__toggle').addEventListener('click', function () {
      toggle(card, !card.classList.contains('is-open'));
    });
    // The "Abstract" pill opens the card; it is hidden while the abstract is visible.
    var pill = card.querySelector('.ilink--abstract');
    if (pill) {
      pill.addEventListener('click', function () { toggle(card, true); });
    }
  });
  // /#paper-slug opens that card (old /publication/... pages redirect here).
  function openHash() {
    var id = location.hash.slice(1);
    var target = id && document.getElementById(id);
    if (target && target.classList.contains('prow--expandable')) {
      if (!target.classList.contains('is-open')) toggle(target, true);
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

  // First click reveals the address; subsequent clicks open the mail client.
  // Obfuscation deters simple scraping, but is not encryption.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.js-email');
    if (!a || a.classList.contains('js-email--shown')) return;
    e.preventDefault();
    var email;
    try { email = atob(a.dataset.e.replace(/-/g, '+').replace(/_/g, '/')); }
    catch (err) { email = ''; }
    if (!email) return;
    var reveal = function () {
      var span = a.querySelector('span');
      a.setAttribute('href', 'mailto:' + email);
      a.title = 'Send email to ' + email;
      a.setAttribute('aria-label', 'Send email to ' + email);
      if (span) span.textContent = email;
      a.classList.add('js-email--shown');
    };
    reveal();
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
  // "BibTeX" pill: copy that paper's entry, flashing the label.
  document.querySelectorAll('.ilink--copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.dataset.bibtexTarget);
      if (!target) return;
      var label = btn.querySelector('span');
      var text = target.textContent.trim();
      var flash = function (msg) {
        label.textContent = msg;
        setTimeout(function () { label.textContent = 'BibTeX'; }, 1600);
      };
      var fallback = function () {
        var area = document.createElement('textarea');
        area.value = text; area.setAttribute('readonly', '');
        area.style.position = 'fixed'; area.style.opacity = '0';
        document.body.appendChild(area); area.select();
        document.execCommand('copy'); area.remove(); flash('Copied');
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { flash('Copied'); }).catch(fallback);
      } else { fallback(); }
    });
  });
})();
