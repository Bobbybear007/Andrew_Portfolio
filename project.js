(function () {
  'use strict';

  // ---- helpers -----------------------------------------------------------

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // project.js sits at the site root, so its own URL tells us how far the
  // current page is from the root (used for the breadcrumb / "all work" links).
  function rootPrefix() {
    try {
      var scripts = document.getElementsByTagName('script');
      var src = '';
      for (var i = 0; i < scripts.length; i++) {
        var s = scripts[i];
        if (s.src && /project\.js(\?|$)/.test(s.src)) { src = s.src; break; }
      }
      if (!src) return '';
      var rootDir = new URL(src, window.location.href).pathname.replace(/[^/]*$/, '');
      var curDir = window.location.pathname.replace(/[^/]*$/, '');
      var fa = curDir.split('/').filter(Boolean);
      var ta = rootDir.split('/').filter(Boolean);
      var i2 = 0;
      while (i2 < fa.length && i2 < ta.length && fa[i2] === ta[i2]) i2++;
      var parts = fa.slice(i2).map(function () { return '..'; }).concat(ta.slice(i2));
      return parts.length ? parts.join('/') + '/' : '';
    } catch (e) {
      return '';
    }
  }

  function loadWorkData(cb) {
    if (window.WorkData) { cb(window.WorkData); return; }
    var scripts = document.getElementsByTagName('script');
    var src = '';
    for (var i = 0; i < scripts.length; i++) {
      var s = scripts[i];
      if (s.src && /project\.js(\?|$)/.test(s.src)) { src = s.src; break; }
    }
    var base = src ? src.replace(/project\.js(\?.*)?$/, '') : '';
    var el = document.createElement('script');
    el.src = base + 'work-data.js';
    el.onload = function () { cb(window.WorkData); };
    el.onerror = function () { cb(null); };
    document.head.appendChild(el);
  }

  function matchedItem(Data) {
    if (!Data) return null;
    var here = window.location.pathname.replace(/^\//, '');
    return Data.items.filter(function (item) {
      // Skip external links and the dynamic template (handled by case-study.js).
      if (!item.href || /^(https?:|#)/.test(item.href) || item.href.indexOf('?') !== -1) return false;
      var clean = item.href.replace(/^\//, '');
      return here === clean || here.slice(-clean.length) === clean;
    })[0] || null;
  }

  // ---- case-study layout injection --------------------------------------

  function metaCell(label, value) {
    if (!value) return '';
    return '<div class="cs-meta-cell"><span class="cs-meta-label">' + esc(label) + '</span>' +
      '<span class="cs-meta-value">' + esc(value) + '</span></div>';
  }

  function injectCaseStudy(Data, item) {
    var main = document.querySelector('main');
    if (!main) return;
    var prefix = rootPrefix();
    var workPath = prefix + 'work/';

    // 1. Breadcrumb
    var crumb = document.createElement('nav');
    crumb.className = 'cs-breadcrumb';
    crumb.setAttribute('aria-label', 'Breadcrumb');
    crumb.innerHTML = '<a href="' + esc(workPath) + '">Work</a>' +
      '<span aria-hidden="true">/</span><span aria-current="page">' + esc(item.title) + '</span>';
    main.insertBefore(crumb, main.firstChild);

    // 2. Metadata panel — append to the hero's quick-facts row when present.
    var meta = [
      metaCell('Type', Data.typesOf(item).join(' \u00b7 ')),
      metaCell('Context', item.context),
      metaCell('Role', item.role),
      metaCell('Organisation', item.organisation),
      metaCell('Timeline', Data.yearLabel(item)),
      metaCell('Status', item.status)
    ].join('');
    if (meta) {
      var host = main.querySelector('.fact-chip');
      var row = host ? host.parentElement : null;
      var panel = document.createElement('div');
      panel.className = 'cs-meta cs-meta--injected';
      panel.innerHTML = meta;
      if (row && row.parentElement) {
        row.parentElement.insertBefore(panel, row.nextSibling);
      } else {
        var firstSection = main.querySelector('section');
        if (firstSection) firstSection.appendChild(panel);
      }
    }

    // 3. My Role — separated from the overall project description.
    if (item.roleNote) {
      var role = document.createElement('section');
      role.className = 'case-study-section cs-role';
      role.id = 'my-role';
      role.innerHTML = '<h2>My Role</h2><div class="cs-prose"><p>' + esc(item.roleNote) + '</p></div>';
      var sections = main.querySelectorAll('section.case-study-section');
      var overview = null;
      for (var i = 0; i < sections.length; i++) {
        if (/overview/i.test(sections[i].querySelector('h2') ? sections[i].querySelector('h2').textContent : '')) {
          overview = sections[i];
          break;
        }
      }
      if (overview && overview.parentElement) {
        overview.parentElement.insertBefore(role, overview);
      } else if (sections.length) {
        sections[0].parentElement.insertBefore(role, sections[0]);
      } else {
        main.appendChild(role);
      }
    }

    // 4. Mark Work as the active nav item on work subpages.
    [document.querySelector('header nav a[href*="work/"]'),
      document.querySelector('#mobile-menu a[href*="work/"]')].forEach(function (a) {
      if (a) {
        a.classList.add('text-[#00D4FF]');
        a.setAttribute('aria-current', 'page');
      }
    });

    // 5. Point old "Projects" links at the new Work route and refresh wording.
    // Only rewrite links to the old portfolio index, never links to individual
    // work pages that happen to live under /projects/.
    main.querySelectorAll('a[href*="projects.html"]').forEach(function (a) {
      a.setAttribute('href', workPath);
      if (/back to projects/i.test(a.textContent)) a.textContent = 'Back to all work';
    });
    main.querySelectorAll('h2').forEach(function (h) {
      if (/explore more projects/i.test(h.textContent)) h.textContent = 'Explore more work';
    });
  }

  // ---- gallery -----------------------------------------------------------

  function initGallery(scope) {
    var root = scope || document;
    var overlay = root.querySelector('#imageOverlay');
    var expanded = root.querySelector('#expandedImg');
    var closeBtn = root.querySelector('#closeBtn');
    var prevBtn = root.querySelector('#prevBtn');
    var nextBtn = root.querySelector('#nextBtn');

    var imgs = Array.from(root.querySelectorAll('.clickable-image'));
    if (!overlay || !expanded || imgs.length === 0) return;

    var idx = -1;

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

    imgs.forEach(function (img, i) {
      img.addEventListener('click', function () { openAt(i); });
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) close();
    });

    closeBtn && closeBtn.addEventListener('click', close);
    nextBtn && nextBtn.addEventListener('click', next);
    prevBtn && prevBtn.addEventListener('click', prev);

    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    });
  }

  // ---- boot --------------------------------------------------------------

  function boot() {
    initGallery(document);
    loadWorkData(function (Data) {
      var item = matchedItem(Data);
      if (item) injectCaseStudy(Data, item);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
