/**
 * work.js
 * Renders the Work landing page, its filters, and the homepage featured strip
 * from the shared WorkData model. Safe to include on any page. It only wires
 * up the elements it finds.
 */
(function () {
  'use strict';

  var Data = window.WorkData;
  if (!Data) return;

  var state = {
    type: 'all',
    context: 'All',
    org: ''
  };

  // ---- utilities ---------------------------------------------------------

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function initials(title) {
    return String(title || '?')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function (w) { return w[0]; })
      .join('')
      .toUpperCase();
  }

  function media(item, className, eager) {
    var src = item.thumbnail ? Data.asset(item.thumbnail) : '';
    var alt = esc(item.title);
    var loading = eager ? 'eager' : 'lazy';
    if (src) {
      return (
        '<div class="' + className + '">' +
          '<img src="' + esc(src) + '" alt="' + alt + '" loading="' + loading + '" decoding="async">' +
        '</div>'
      );
    }
    return (
      '<div class="' + className + ' work-media--placeholder" aria-hidden="true">' +
        '<span>' + esc(initials(item.title)) + '</span>' +
      '</div>'
    );
  }

  function typeLabel(item) {
    var parts = Data.typesOf(item);
    return parts.join(' \u00b7 ');
  }

  // Tags complement the type kicker (which already names the type/medium) so
  // they only carry context and disciplines to avoid repeating information.
  function tags(item) {
    var list = [];
    if (item.context) list.push(item.context);
    (item.disciplines || []).slice(0, 3).forEach(function (d) {
      if (list.indexOf(d) === -1) list.push(d);
    });
    return list;
  }

  function orgChip(item) {
    if (item.organisation) {
      return '<button type="button" class="work-org-btn" data-org="' + esc(item.organisation) +
        '" aria-label="Show work from ' + esc(item.organisation) + '">' +
        esc(item.organisation) + '</button>';
    }
    if (item.context) {
      return '<span class="work-org-text">' + esc(item.context) + '</span>';
    }
    return '';
  }

  function metaLine(item) {
    var bits = [];
    if (item.role) bits.push(esc(item.role));
    if (item.organisation) bits.push(esc(item.organisation));
    else if (item.context) bits.push(esc(item.context));
    return bits.join(' \u00b7 ');
  }

  // ---- card templates ----------------------------------------------------

  function featuredCard(item, index) {
    var href = item.href ? Data.href(item.href) : '';
    var wide = index === 0 ? ' work-featured-card--wide' : '';
    var type = typeLabel(item);
    var overlay =
      '<div class="work-featured-overlay">' +
        (type ? '<p class="work-type">' + esc(type) + '</p>' : '') +
        '<h3 class="work-featured-title">' + esc(item.title) + '</h3>' +
        (metaLine(item) ? '<p class="work-featured-meta">' + metaLine(item) + '</p>' : '') +
      '</div>';
    var body =
      (item.summary ? '<p class="work-summary">' + esc(item.summary) + '</p>' : '') +
      (item.stub ? '<p class="work-note">' + esc(Data.stubNote) + '</p>' : '') +
      (href ? '<span class="work-cta">View project<span class="work-cta-arrow" aria-hidden="true">\u2192</span></span>' : '');
    var inner =
      '<div class="work-featured-media">' + media(item, 'work-media', true) + overlay + '</div>' +
      '<div class="work-featured-body">' + body + '</div>';

    if (href) {
      return '<article class="work-featured-card' + wide + '">' +
        '<a class="work-featured-link" href="' + esc(href) + '">' + inner + '</a>' +
        '</article>';
    }
    return '<article class="work-featured-card' + wide + '">' + inner + '</article>';
  }

  function gridCard(item) {
    var href = item.href ? Data.href(item.href) : '';
    var type = typeLabel(item);
    var kickerHtml = type ? '<p class="work-card-type">' + esc(type) + '</p>' : '';
    var roleLine = item.role ? '<p class="work-card-role">' + esc(item.role) + '</p>' : '';
    var orgValue = orgChip(item);
    var orgHtml = orgValue ? '<p class="work-card-org">' + orgValue + '</p>' : '';
    var tagList = tags(item);
    var tagsHtml = tagList.length
      ? '<ul class="work-tags">' + tagList.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'
      : '';
    var noteHtml = item.stub ? '<p class="work-note">Details coming soon</p>' : '';

    var mediaHtml = media(item, 'work-media');
    var body =
      '<div class="work-card-body">' +
        kickerHtml +
        '<h3 class="work-card-title">' +
          (href ? '<a href="' + esc(href) + '">' + esc(item.title) + '</a>' : esc(item.title)) +
        '</h3>' +
        roleLine +
        orgHtml +
        tagsHtml +
        noteHtml +
      '</div>';

    var mediaBlock = href
      ? '<a class="work-card-media-link" href="' + esc(href) + '" tabindex="-1" aria-hidden="true">' + mediaHtml + '</a>'
      : mediaHtml;

    return '<article class="work-card" data-type="' + esc(item.type || '') + '">' +
      mediaBlock + body +
      '</article>';
  }

  function archiveRow(item) {
    var href = item.href ? Data.href(item.href) : '';
    var year = Data.yearLabel(item);
    var meta = [typeLabel(item), Data.roleLabel(item)].filter(Boolean).join(' \u00b7 ');
    var content =
      '<div class="work-archive-media">' +
        media(item, 'work-media') +
      '</div>' +
      '<div class="work-archive-body">' +
        '<h3 class="work-archive-title">' + esc(item.title) + '</h3>' +
        '<p class="work-archive-meta">' + esc(meta) + '</p>' +
      '</div>' +
      (year ? '<span class="work-archive-year">' + esc(year) + '</span>' : '');
    if (href) {
      return '<a class="work-archive-row" href="' + esc(href) + '">' + content + '</a>';
    }
    return '<div class="work-archive-row">' + content + '</div>';
  }

  // ---- filtering ---------------------------------------------------------

  function filtered() {
    return Data.active()
      .filter(function (item) {
        return Data.matchesType(item, state.type) && Data.matchesContext(item, state.context);
      })
      .filter(function (item) {
        return !state.org || item.organisation === state.org;
      });
  }

  function renderGrid() {
    var grid = document.getElementById('work-grid');
    if (!grid) return;
    var items = filtered();
    var count = document.getElementById('work-count');
    if (count) {
      count.textContent = items.length === 1 ? '1 piece of work' : items.length + ' pieces of work';
    }
    if (!items.length) {
      grid.innerHTML = '<div class="work-empty" role="status">' +
        '<p>No work matches these filters yet.</p>' +
        '<button type="button" class="work-reset" id="work-reset">Reset filters</button>' +
      '</div>';
      return;
    }
    grid.innerHTML = items.map(gridCard).join('');
  }

  function setPressed(buttons, active) {
    buttons.forEach(function (btn) {
      var isActive = btn.getAttribute('data-value') === active;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      btn.classList.toggle('is-active', isActive);
    });
  }

  function buildFilters() {
    var typeWrap = document.getElementById('work-filters');
    var contextWrap = document.getElementById('work-contexts');

    if (typeWrap && !typeWrap.children.length) {
      typeWrap.innerHTML = Data.filters.map(function (f) {
        return '<button type="button" class="work-filter' + (f.id === state.type ? ' is-active' : '') +
          '" data-group="type" data-value="' + esc(f.id) + '" aria-pressed="' +
          (f.id === state.type ? 'true' : 'false') + '">' + esc(f.label) + '</button>';
      }).join('');
      typeWrap.addEventListener('click', function (e) {
        var btn = e.target.closest('button[data-group="type"]');
        if (!btn) return;
        state.type = btn.getAttribute('data-value');
        setPressed(Array.prototype.slice.call(typeWrap.querySelectorAll('button')), state.type);
        renderGrid();
      });
    }

    if (contextWrap && !contextWrap.children.length) {
      contextWrap.innerHTML = Data.contexts.map(function (c) {
        return '<button type="button" class="work-filter work-filter--ghost" data-group="context" data-value="' + esc(c) + '" aria-pressed="' +
          (c === state.context ? 'true' : 'false') + '">' + esc(c) + '</button>';
      }).join('');
      contextWrap.addEventListener('click', function (e) {
        var btn = e.target.closest('button[data-group="context"]');
        if (!btn) return;
        state.context = btn.getAttribute('data-value');
        setPressed(Array.prototype.slice.call(contextWrap.querySelectorAll('button')), state.context);
        renderGrid();
      });
    }
  }

  function resetFilters() {
    state.type = 'all';
    state.context = 'All';
    state.org = '';
    var typeWrap = document.getElementById('work-filters');
    var contextWrap = document.getElementById('work-contexts');
    var toArray = function (node) { return Array.prototype.slice.call(node.querySelectorAll('button')); };
    if (typeWrap) setPressed(toArray(typeWrap), state.type);
    if (contextWrap) setPressed(toArray(contextWrap), state.context);
    var chip = document.getElementById('work-org-active');
    if (chip) chip.remove();
    renderGrid();
  }

  function setupOrgClicks() {
    document.addEventListener('click', function (e) {
      if (e.target.closest('#work-reset')) {
        e.preventDefault();
        resetFilters();
        return;
      }
      var btn = e.target.closest('.work-org-btn');
      if (!btn) return;
      e.preventDefault();
      var org = btn.getAttribute('data-org');
      state.org = state.org === org ? '' : org;

      var existing = document.getElementById('work-org-active');
      if (existing) existing.remove();

      if (state.org) {
        var clear = document.createElement('button');
        clear.type = 'button';
        clear.id = 'work-org-active';
        clear.className = 'work-org-active';
        clear.innerHTML = 'Organisation: ' + esc(state.org) + ' <span aria-hidden="true">\u00d7</span>';
        clear.setAttribute('aria-label', 'Clear organisation filter: ' + state.org);
        var controls = document.getElementById('work-filter-bar');
        if (controls) controls.appendChild(clear);
        clear.addEventListener('click', function () {
          state.org = '';
          clear.remove();
          renderGrid();
        });
      }
      renderGrid();
    });
  }

  // ---- section renderers -------------------------------------------------

  function renderFeatured() {
    var wrap = document.getElementById('work-featured');
    if (!wrap) return;
    wrap.innerHTML = Data.featured().map(featuredCard).join('');
  }

  function renderArchive() {
    var wrap = document.getElementById('work-archive');
    if (!wrap) return;
    var items = Data.archived();
    if (!items.length) {
      var section = document.getElementById('work-archive-section');
      if (section) section.hidden = true;
      return;
    }
    wrap.innerHTML = items.map(archiveRow).join('');
  }

  function renderHomepage() {
    var wrap = document.getElementById('homepage-work');
    if (!wrap) return;
    // Prefer current, strong work rather than the first/oldest entries, and
    // keep the homepage cards visually uniform (no spanning "wide" card).
    wrap.innerHTML = Data.featured(3).map(function (item) { return featuredCard(item, -1); }).join('');
  }

  function init() {
    renderHomepage();
    renderFeatured();
    buildFilters();
    setupOrgClicks();
    renderGrid();
    renderArchive();
  }

  window.WorkUI = {
    featuredCard: featuredCard,
    gridCard: gridCard,
    archiveRow: archiveRow,
    init: init
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
