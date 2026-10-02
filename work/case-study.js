/**
 * case-study.js
 * Renders the dynamic case-study template from ?slug= using WorkData.
 * Sections are only emitted when the underlying data exists, so stubs stay
 * honest rather than filling gaps with invented content.
 */
(function () {
  'use strict';

  var Data = window.WorkData;
  if (!Data) return;

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function slugFromUrl() {
    try {
      return new URLSearchParams(window.location.search).get('slug') || '';
    } catch (e) {
      var m = /[?&]slug=([^&]+)/.exec(window.location.search);
      return m ? decodeURIComponent(m[1]) : '';
    }
  }

  function metaCell(label, value) {
    if (!value) return '';
    return '<div class="cs-meta-cell"><span class="cs-meta-label">' + esc(label) + '</span>' +
      '<span class="cs-meta-value">' + esc(value) + '</span></div>';
  }

  function chipList(label, values) {
    if (!values || !values.length) return '';
    return '<div class="cs-chip-group"><span class="cs-meta-label">' + esc(label) + '</span>' +
      '<ul class="cs-chips">' + values.map(function (v) { return '<li>' + esc(v) + '</li>'; }).join('') + '</ul></div>';
  }

  function prose(text) {
    if (!text) return '';
    return String(text)
      .split(/\n{2,}/)
      .map(function (p) { return '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>'; })
      .join('');
  }

  function section(id, title, body) {
    if (!body) return '';
    return '<section class="case-study-section" ' + (id ? 'id="' + id + '"' : '') + '>' +
      '<h2>' + esc(title) + '</h2>' + body + '</section>';
  }

  function renderNotFound() {
    document.getElementById('case-study-root').innerHTML =
      '<section class="max-w-3xl mx-auto px-6 py-24 text-center">' +
        '<h1 class="text-4xl font-black uppercase tracking-tight mb-4">Work not found</h1>' +
        '<p class="text-gray-400 mb-8">This case study does not exist (yet).</p>' +
        '<a href="./" class="inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">Back to all work</a>' +
      '</section>';
  }

  function render(item) {
    var root = document.getElementById('case-study-root');
    var year = Data.yearLabel(item);
    var hero = item.hero ? Data.asset(item.hero) : (item.thumbnail ? Data.asset(item.thumbnail) : '');
    var out = [];

    // Breadcrumb
    out.push(
      '<nav class="cs-breadcrumb max-w-5xl mx-auto px-6" aria-label="Breadcrumb">' +
        '<a href="./">Work</a><span aria-hidden="true">/</span><span aria-current="page">' + esc(item.title) + '</span>' +
      '</nav>'
    );

    // Hero
    out.push('<section class="cs-hero max-w-5xl mx-auto px-6">');
    if (item.type) out.push('<p class="cs-eyebrow">' + esc(item.type) + (item.medium && item.medium !== item.type ? ' \u00b7 ' + esc(item.medium) : '') + '</p>');
    out.push('<h1 class="cs-title">' + esc(item.title) + '</h1>');
    if (item.summary) out.push('<p class="cs-lead">' + esc(item.summary) + '</p>');
    if (item.aliases && item.aliases.length) {
      out.push('<p class="cs-alias">Also known as ' + item.aliases.map(esc).join(', ') + '</p>');
    }

    // Action links
    var links = (item.links || []).slice();
    if (links.length) {
      out.push('<div class="cs-hero-links">' + links.map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + '</a>';
      }).join('') + '</div>');
    }

    // Metadata panel
    var meta = [
      metaCell('Type', Data.typesOf(item).join(' \u00b7 ')),
      metaCell('Context', item.context),
      metaCell('Role', item.role),
      metaCell('Organisation', item.organisation),
      metaCell('Timeline', year),
      metaCell('Status', item.status)
    ].join('');
    if (meta) out.push('<div class="cs-meta">' + meta + '</div>');

    out.push('<div class="cs-chips-wrap">' +
      chipList('Technologies', item.technologies) +
      chipList('Disciplines', item.disciplines) +
    '</div>');

    if (hero) {
      out.push('<figure class="cs-hero-media"><img src="' + esc(hero) + '" alt="' + esc(item.title) + '" decoding="async"></figure>');
    }
    out.push('</section>');

    // Overview
    out.push(section('overview', 'Overview', item.overview ? '<div class="cs-prose">' + prose(item.overview) + '</div>' : ''));

    // My role — kept visually distinct from the overall project.
    if (item.roleNote) {
      out.push(
        '<section class="case-study-section cs-role" id="my-role">' +
          '<h2>My Role</h2>' +
          '<div class="cs-prose">' + prose(item.roleNote) + '</div>' +
        '</section>'
      );
    }

    // Contributions / what I worked on
    if (item.contributions && item.contributions.length) {
      out.push(
        '<section class="case-study-section" id="contributions">' +
          '<h2>What I Worked On</h2>' +
          '<div class="cs-contrib-grid">' +
            item.contributions.map(function (c) {
              return '<article class="cs-contrib"><h3>' + esc(c.title) + '</h3><p>' + esc(c.body) + '</p></article>';
            }).join('') +
          '</div>' +
        '</section>'
      );
    }

    // Technical details
    if (item.technicalDetails && item.technicalDetails.length) {
      out.push(
        '<section class="case-study-section" id="technical">' +
          '<h2>Technical Details</h2>' +
          '<div class="cs-prose">' +
            item.technicalDetails.map(function (t) {
              return '<h3>' + esc(t.title) + '</h3><p>' + esc(t.body) + '</p>';
            }).join('') +
          '</div>' +
        '</section>'
      );
    }

    // Gallery
    if (item.gallery && item.gallery.length) {
      out.push(
        '<section class="case-study-section" id="gallery">' +
          '<h2>Gallery</h2>' +
          '<div class="image-gallery-grid">' +
            item.gallery.map(function (g) {
              return '<img src="' + esc(Data.asset(g.src)) + '" alt="' + esc(g.alt || item.title) + '" class="clickable-image">';
            }).join('') +
          '</div>' +
        '</section>'
      );
    }

    // Team / credits
    if (item.credits && item.credits.length) {
      out.push(
        '<section class="case-study-section" id="credits">' +
          '<h2>Team / Credits</h2>' +
          '<ul class="cs-credits">' +
            item.credits.map(function (c) {
              return '<li><strong>' + esc(c.name) + '</strong>' + (c.role ? ' \u2014 ' + esc(c.role) : '') + '</li>';
            }).join('') +
          '</ul>' +
        '</section>'
      );
    }

    // Stub notice
    if (item.stub) {
      out.push('<section class="case-study-section"><p class="cs-stub">' + esc(Data.stubNote) + '</p></section>');
    }

    // Footer CTA
    out.push(
      '<section class="max-w-5xl mx-auto px-6 py-24">' +
        '<div class="bg-violet-600/10 border border-violet-500/20 rounded-3xl p-12 text-center">' +
          '<h2 class="text-3xl font-bold mb-6">Explore more work</h2>' +
          '<a href="./" class="inline-block bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-10 rounded-lg transition-all duration-300">Back to all work</a>' +
        '</div>' +
      '</section>'
    );

    root.innerHTML = out.join('');
    document.title = item.title + ' | Andrew Zambazos';
    var desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', item.summary || item.title + ' — work by Andrew Zambazos.');
  }

  function init() {
    var root = document.getElementById('case-study-root');
    if (!root) return;
    var item = Data.getBySlug(slugFromUrl());
    if (!item) renderNotFound();
    else render(item);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
