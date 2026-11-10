/* Homepage: expand a paper card in place (figure + abstract). */
(function () {
  function setOpen(card, open) {
    var more = card.querySelector('.prow__more');
    var btn = card.querySelector('.prow__toggle');
    if (!more || !btn) return;
    more.hidden = !open;
    card.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Hide figure and abstract' : 'Show figure and abstract');
  }
  document.querySelectorAll('.prow--expandable').forEach(function (card) {
    card.querySelector('.prow__toggle').addEventListener('click', function () {
      setOpen(card, !card.classList.contains('is-open'));
    });
  });
  // /#paper-slug opens that card (old /publication/... pages redirect here).
  var id = location.hash.slice(1);
  var target = id && document.getElementById(id);
  if (target && target.classList.contains('prow--expandable')) {
    setOpen(target, true);
    setTimeout(function () { target.scrollIntoView({ block: 'start' }); }, 60);
  }
})();
