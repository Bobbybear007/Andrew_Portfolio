(function () {
  function initGallery(scope) {
    const root = scope || document;
    const overlay = root.querySelector('#imageOverlay');
    const expanded = root.querySelector('#expandedImg');
    const closeBtn = root.querySelector('#closeBtn');
    const prevBtn = root.querySelector('#prevBtn');
    const nextBtn = root.querySelector('#nextBtn');

    const imgs = Array.from(root.querySelectorAll('.clickable-image'));
    if (!overlay || !expanded || imgs.length === 0) return;

    let idx = -1;

    function openAt(i) {
      idx = i;
      expanded.src = imgs[idx].src;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.classList.remove('open');
      expanded.src = '';
      document.body.style.overflow = '';
    }

    function next() { if (imgs.length) openAt((idx + 1) % imgs.length); }
    function prev() { if (imgs.length) openAt((idx - 1 + imgs.length) % imgs.length); }

    imgs.forEach((img, i) => {
      img.addEventListener('click', () => openAt(i));
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });

    closeBtn && closeBtn.addEventListener('click', close);
    nextBtn && nextBtn.addEventListener('click', next);
    prevBtn && prevBtn.addEventListener('click', prev);

    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initGallery(document));
  } else {
    initGallery(document);
  }
})();
