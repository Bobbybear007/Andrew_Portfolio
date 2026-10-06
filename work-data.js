/**
 * work-data.js
 * Central metadata for everything in the Work section.
 *
 * This is intentionally framework-free (plain objects + small helpers) so the
 * static site can grow without another redesign. To add new work, append an
 * object to WORK_ITEMS. The landing page, homepage and individual work pages
 * read from the same source. Each piece lives at work/<name>/index.html.
 *
 * Only verified information from the existing site / résumé is populated.
 * Fields with no verified value are left empty rather than invented.
 */
(function () {
  'use strict';

  // Pages set window.WORK_BASE before loading this file ('' at the root,
  // '../' from /work/, '../../' from /work/<piece>/). All stored paths are
  // site-root relative.
  var BASE = (typeof window !== 'undefined' && window.WORK_BASE) || '';

  function resolve(path) {
    if (!path) return '';
    if (/^(https?:)?\/\//.test(path) || /^(mailto:|tel:|#|\/)/.test(path)) return path;
    return BASE + path;
  }

  // Primary filters describe what the work is.
  var FILTERS = [
    { id: 'all', label: 'All', types: null },
    { id: 'games', label: 'Games', types: ['Game', 'Game Jam'] },
    { id: 'film', label: 'Film', types: ['Film'] },
    { id: 'tools', label: 'Tools & Tech', types: ['Tool', 'Software', 'Engine'] },
    { id: 'mods', label: 'Mods', types: ['Mod'] },
    { id: '3d', label: '3D & Design', types: ['3D Art', 'Environment Art'] },
    { id: 'web', label: 'Web', types: ['Web'] }
  ];

  // Secondary filters describe the context the work belongs to.
  var CONTEXTS = ['All', 'Personal', 'Studio', 'Collaborative', 'University', 'Open Source'];

  var STUB_NOTE = 'A full case study for this work is still being written.';

  var WORK_ITEMS = [
    {
      title: 'Commonwealth Online',
      slug: 'commonwealth-online',
      summary: 'A multiplayer mod for Fallout 4 that preserves the single-player experience while adding online co-op.',
      type: 'Mod',
      medium: '',
      context: 'Collaborative',
      role: 'Project Lead · Programmer',
      organisation: 'Commonwealth Labs',
      status: 'In Development',
      startYear: 2026,
      endYear: 'Present',
      technologies: ['C++', 'F4SE', 'CommonLibF4', 'GameNetworkingSockets'],
      disciplines: ['Networking', 'Gameplay Systems', 'UI/UX', 'Tooling', 'Project Direction'],
      thumbnail: 'assets/images/CommonwealthOnline/COBanner.png',
      // In-game player screenshot used for the homepage featured card. The
      // banner thumbnail above carries the project wordmark, which would
      // otherwise read as a second title behind the featured card's overlay.
      featuredImage: 'assets/images/CommonwealthOnline/UserOptcron-2.webp',
      hero: '',
      featured: true,
      archived: false,
      href: 'work/commonwealth-online/',
      links: [],
      overview:
        'Commonwealth Online is a multiplayer mod for Fallout 4 focused on preserving the single-player experience while adding online co-op functionality. It is an independent mod project built to let players experience the Commonwealth together.',
      // Left empty: the dedicated Commonwealth Online page carries a fuller,
      // structured "My Role" section that project.js should not duplicate.
      roleNote: '',
      contributions: [
        {
          title: 'Gameplay & Networking',
          body:
            'Developing core systems using C++, F4SE, Python and custom tooling, including player synchronisation, server-client communication and remote player representation.'
        },
        {
          title: 'Tooling & Testing',
          body:
            'Building developer testing tools and modding workflows that support the project team during development.'
        },
        {
          title: 'UI/UX & Direction',
          body:
            'Responsible for UI and UX design, technical planning and overall project direction.'
        }
      ],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Patriam: The Saga of Roljar',
      slug: 'patriam-saga-of-roljar',
      summary: "A narrative-driven third-person action RPG in development at Patriam Studios, set during the Grey Rebellion of the studio's original fantasy universe.",
      type: 'Game',
      medium: '',
      context: 'Collaborative',
      role: 'Environment & Technical Artist',
      organisation: 'Patriam Studios',
      status: 'In Development',
      startYear: 2026,
      endYear: 'Present',
      technologies: ['Unreal Engine 5', 'Blender'],
      disciplines: [
        'Level Design',
        'Environment Art',
        '3D Asset Creation',
        'Texturing',
        'Materials',
        'Procedural Foliage',
        'Gameplay Scripting',
        'Technical Art'
      ],
      thumbnail: 'assets/images/Patriam/Forest2.png',
      hero: 'assets/images/Patriam/Forest2.png',
      featured: false,
      archived: false,
      href: 'work/patriam/',
      links: [{ label: 'Studio site', url: 'https://patriamstudios.com/' }],
      overview:
        'Patriam Studios is an independent New Zealand game studio with an international remote team, built around a long-running original setting called The World of Patriam. The team has been telling stories in that world since 2018 through a Hearts of Iron IV mod and several Minecraft roleplay projects, before forming the studio around a standalone game.\n\n' +
        "Patriam: The Saga of Roljar is the studio's first standalone title, a narrative-driven third-person action RPG in development in Unreal Engine 5. It takes place during the First Norkinian Civil War, known as the Grey Rebellion, and follows Roljar of Sarin after his family is murdered during a failed coup. His pursuit of Kyrien Druokon, the lord responsible, grows into a journey through a civil war spanning multiple nations and cultures.\n\n" +
        'The game is structured around that pursuit across five major lands, beginning in Norkinia and moving through Watol, Taienmar, Northern Kallonia and Aungmar. The setting stays a major focus, with distinct regions, political systems, religions, cultures, historical conflicts and empires. The same universe also supports Patriam: Edge of the World, a Minecraft Java roleplay and politics server where players establish kingdoms and can influence the history of the setting.',
      roleNote:
        'I joined Patriam Studios as an Environment & Technical Artist, contributing to the level and environment side of The Saga of Roljar. My work covers level and environment design, 3D asset creation, basic texturing, material setup, procedural foliage placement and gameplay scripting support. I create stylized fantasy locations, build immersive environments, integrate environmental assets and support the technical implementation where needed.',
      contributions: [
        {
          title: 'Level & Environment Design',
          body:
            'Creating stylized fantasy locations with distinctive features and building immersive environments that fit the world of Patriam.'
        },
        {
          title: '3D Art & Materials',
          body:
            'Creating 3D environmental assets with basic texturing and material setup for use in Unreal Engine 5.'
        },
        {
          title: 'Procedural Foliage & Technical Art',
          body:
            'Handling procedural foliage placement and technical art support, integrating environmental assets into the project pipeline.'
        },
        {
          title: 'Gameplay Scripting Support',
          body:
            'Supporting the programming side with gameplay scripting where environment work needs to connect to game systems.'
        }
      ],
      technicalDetails: [
        {
          title: 'Engine & Pipeline',
          body:
            'Environment work is built in Unreal Engine 5, with 3D assets authored in Blender and brought in through the studio pipeline.'
        },
        {
          title: 'Procedural Foliage',
          body:
            'Using procedural foliage placement to populate large forest and snow regions efficiently while keeping control over composition and density.'
        },
        {
          title: 'Custom Billboard Foliage',
          body:
            'Building custom billboard foliage so distant vegetation stays cheap to render without losing the shape and colour of the environment.'
        }
      ],
      gallery: [
        { src: 'assets/images/Patriam/Forest1.png', alt: 'Stylized forest environment' },
        { src: 'assets/images/Patriam/Forest2.png', alt: 'Forest environment detail' },
        { src: 'assets/images/Patriam/Forest3.png', alt: 'Forest level vista' },
        { src: 'assets/images/Patriam/Snow1.png', alt: 'Snow region environment' },
        { src: 'assets/images/Patriam/Snow2.png', alt: 'Snow level design' },
        { src: 'assets/images/Patriam/Snow3.png', alt: 'Snow landscape detail' },
        { src: 'assets/images/Patriam/CustomBillboardFoliage.png', alt: 'Custom billboard foliage' }
      ],
      credits: [],
      stub: false
    },

    {
      title: 'Star in the Wind',
      slug: 'star-in-the-wind',
      summary: '',
      type: 'Film',
      medium: '',
      context: 'University',
      role: '',
      organisation: 'Massey University Film Production',
      status: '',
      startYear: '',
      endYear: '',
      technologies: [],
      disciplines: ['Film Production'],
      thumbnail: '',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/star-in-the-wind/',
      links: [],
      overview:
        'Star in the Wind is a third-year university film project that I contributed to as part of the production team.',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'G.A.R.D.E.N.',
      slug: 'garden-opencommonwealth',
      summary: '',
      aliases: ['OpenCommonwealth'],
      type: '',
      medium: '',
      context: '',
      role: '',
      organisation: '',
      status: '',
      startYear: '',
      endYear: '',
      technologies: [],
      disciplines: [],
      thumbnail: '',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/garden/',
      links: [],
      overview: '',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: true
    },

    {
      title: 'Olympus Game Studios',
      slug: 'olympus-game-studios',
      summary: 'An independent studio focused on building original tools, engines and narrative-driven game experiences.',
      type: 'Studio',
      medium: '',
      context: 'Studio',
      role: 'Co-founder · Technical Lead',
      organisation: 'Olympus Game Studios',
      status: 'Active',
      startYear: 2023,
      endYear: 'Present',
      technologies: ['C++', 'Editor Tooling', 'Rendering', 'UI Systems'],
      disciplines: ['Game Design', 'Level Design', 'UI/UX', 'Internal Tools'],
      thumbnail: 'assets/images/Olympus/OlympusBanner.svg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/olympus/',
      links: [{ label: 'Olympus site', url: 'https://www.olympusgames.dev/' }],
      overview:
        'Olympus Game Studios is an independent game and technology studio focused on building original tools, engines and narrative-driven experiences.',
      roleNote:
        'I co-founded Olympus and contribute across game design, level design, UI and UX and internal tools. I also support creative direction and work with designers, programmers and artists.',
      contributions: [
        {
          title: 'Studio & Creative Direction',
          body:
            'Supporting creative direction and collaborating with designers, programmers and artists across the studio\'s projects.'
        },
        {
          title: 'Tools & Editor Workflows',
          body:
            'Contributing to editor workflows and usability for the Hephaestus Engine from a designer-focused perspective.'
        }
      ],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Hephaestus Engine',
      slug: 'hephaestus-engine',
      summary: 'A custom C++ game engine and editor built from the ground up, focused on performance, modern rendering and bespoke tooling.',
      type: 'Engine',
      medium: '',
      context: 'Studio',
      role: 'Editor UX Contributor',
      organisation: 'Olympus Game Studios',
      status: 'In Development',
      startYear: '',
      endYear: 'Present',
      technologies: ['C++'],
      disciplines: ['Engine Development', 'Editor Tooling', 'UI/UX', 'Rendering'],
      thumbnail: 'assets/images/Olympus/HephaestusBanner.svg',
      hero: '',
      featured: true,
      archived: false,
      href: 'work/hephaestus/',
      links: [{ label: 'Hephaestus page', url: 'https://www.olympusgames.dev/hephaestus.html' }],
      overview:
        'Hephaestus is a custom C++ game engine built from the ground up, focused on performance, modern rendering and bespoke tooling.',
      roleNote:
        'I contribute to Hephaestus from a designer-focused perspective, supporting editor workflows and usability rather than engine architecture.',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Atlas',
      slug: 'atlas',
      summary: 'Internal planning and collaboration tools used by Olympus to manage projects, documentation and development workflows.',
      type: 'Tool',
      medium: '',
      context: 'Studio',
      role: '',
      organisation: 'Olympus Game Studios',
      status: 'Active Design',
      startYear: '',
      endYear: '',
      technologies: [],
      disciplines: ['Internal Tools', 'Planning', 'Knowledge Management'],
      thumbnail: 'assets/images/Olympus/OlympusBanner.svg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/atlas/',
      links: [],
      overview:
        'Atlas is a private internal platform that centralises planning, coordination and knowledge across active projects. It acts as a shared backbone for long-running work.',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Star Trek in Unreal Engine',
      slug: 'star-trek-ue5',
      summary: 'A custom environment project recreating authentic Star Trek starship interiors in Unreal Engine 5.',
      type: '3D Art',
      medium: 'Environment Art',
      context: 'Personal',
      role: '',
      organisation: '',
      status: 'Completed',
      startYear: '',
      endYear: '',
      technologies: ['Unreal Engine 5', 'Blender'],
      disciplines: ['Environment Art', 'Lighting', '3D Modeling', 'VFX'],
      thumbnail: 'assets/images/ststuff/StarTrekThumb.jpg',
      hero: 'assets/images/ststuff/Andromeda1.png',
      featured: true,
      archived: false,
      href: 'work/star-trek/',
      links: [],
      overview:
        'A personal environment design project recreating Starfleet bridges and command centres in Unreal Engine 5. I focused on detailed modelling, dynamic lighting and immersive textures.',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Star Wars Set Design in Unreal Engine',
      slug: 'star-wars-ue5',
      summary: 'A highly detailed Star Wars corridor built from concept art in Unreal Engine 5.',
      type: '3D Art',
      medium: 'Environment Art',
      context: 'Personal',
      role: '',
      organisation: '',
      status: 'Completed',
      startYear: '',
      endYear: '',
      technologies: ['Unreal Engine 5', 'Blender'],
      disciplines: ['Environment Art', 'Lighting', '3D Modeling'],
      thumbnail: 'assets/images/StarWars/Corridor3.jpg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/star-wars/',
      links: [],
      overview:
        'Bringing the design language of the Star Wars universe to life through a detailed corridor inspired by concept art from Star Wars Battlefront II.',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'An Old Mine / New Hideout',
      slug: 'hideout',
      summary: 'An old mine converted into a rebel hideout, built in Unreal Engine for Fortnite (UEFN).',
      type: '3D Art',
      medium: 'Environment Art',
      context: 'Personal',
      role: '',
      organisation: '',
      status: 'Completed',
      startYear: '',
      endYear: '',
      technologies: ['UEFN'],
      disciplines: ['Environment Design', 'Level Design', 'Lighting'],
      thumbnail: 'assets/images/Hideout/HideoutThumbnail.jpg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/hideout/',
      links: [],
      overview:
        'A sprawling underground hideout built in Unreal Engine for Fortnite, showcasing UEFN\'s tools for crafting detailed, immersive environments.',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Special Time Fixing Unit',
      slug: 'special-time-fixing-unit',
      summary: 'A puzzle-platformer where you manipulate time and collaborate with your past self to fix temporal anomalies.',
      type: 'Game',
      medium: 'Game Jam',
      context: 'Collaborative',
      role: 'Level Designer',
      organisation: '',
      status: 'Released',
      startYear: 2024,
      endYear: 2024,
      technologies: ['Unity'],
      disciplines: ['Level Design', 'Puzzle Design', 'Playtesting'],
      thumbnail: 'assets/images/STFU/STFU-Thumbnail2.jpg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/stfu/',
      links: [{ label: 'itch.io', url: 'https://beetruth.itch.io/the-special-time-fixing-unit' }],
      overview:
        'A puzzle-platformer developed for the Beginner\'s Jam Summer 2024, where players navigate environments by manipulating time and collaborating with past versions of themselves.',
      roleNote:
        'I contributed to this team project as the Level Designer, crafting levels built around the time-manipulation mechanics and iterating on puzzle flow through playtesting.',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: "Mr. Brown's Smuggle Run",
      slug: 'mr-brown',
      summary: 'A stealth game where you smuggle contraband into prisons while evading security.',
      type: 'Game',
      medium: 'Game Jam',
      context: 'Collaborative',
      role: '',
      organisation: '',
      status: 'Released',
      startYear: 2024,
      endYear: 2024,
      technologies: ['Godot'],
      disciplines: ['Level Design', 'Stealth Design', 'AI Design'],
      thumbnail: 'assets/images/MrB/MrB.jpg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/mr-brown/',
      links: [],
      overview:
        'A stealth-action game developed for the Beginner\'s Jam Winter 2024, featuring pixel-art visuals and stealth mechanics built around avoiding increasingly sophisticated AI guards.',
      roleNote:
        'I contributed to this team project, with a focus on collaborative level design for the stealth environments.',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Fallout: Wastelands',
      slug: 'fallout-wastelands',
      summary: 'A large-scale Fallout mod initiative to build multiple new wastelands that converge into a single overarching storyline.',
      type: 'Mod',
      medium: '',
      context: 'Collaborative',
      role: 'Lead Designer · Project Lead',
      organisation: '',
      status: 'Archived',
      startYear: 2021,
      endYear: 2024,
      technologies: ['Bethesda Creation Kit', 'Papyrus', 'Blender'],
      disciplines: ['Level Design', 'World Building', 'Team Leadership'],
      thumbnail: 'assets/images/falloutwork/Wastelands/Fallout-Wastelands0.PNG',
      hero: '',
      featured: false,
      archived: true,
      href: 'work/fallout-wastelands/',
      links: [],
      overview:
        'A large-scale Fallout mod that began as Fallout: Boardwalk and grew into a multi-project initiative with an interconnected storyline. Development has since ended.',
      roleNote:
        'I was Lead Designer and Project Lead. As well as building levels, I taught, guided and managed the level design team. I acted as the bridge between writers, concept artists and project leads on one side and the level designers on the other.',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Fallout: Music City',
      slug: 'fallout-music-city',
      summary: 'A Fallout mod set in a post-apocalyptic Nashville with hand-crafted dungeons, environmental storytelling and immersive interiors.',
      type: 'Mod',
      medium: '',
      context: 'Collaborative',
      role: 'Level Designer · Project Lead',
      organisation: '',
      status: 'Archived',
      startYear: '',
      endYear: '',
      technologies: ['Bethesda Creation Kit'],
      disciplines: ['Level Design', 'Environmental Storytelling', 'Interior Design'],
      thumbnail: 'assets/images/falloutwork/MusicCity/MusicCity-TheDeathDepths1.png',
      hero: '',
      featured: false,
      archived: true,
      href: 'work/fallout-music-city/',
      links: [],
      overview:
        'A Fallout mod reimagining Nashville as a wasteland frontier, blending Southern culture with Fallout\'s post-apocalyptic tone. Development has since ended.',
      roleNote:
        'I joined as a junior level designer and served as project lead. I designed locations including the Abandoned Hospital, Hatch Bunker, The Death Depths and The Hole.',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Inscribe',
      slug: 'inscribe',
      summary: 'A local-first, distraction-free writing tool with manual file saving and Markdown support.',
      type: 'Tool',
      medium: 'Web',
      context: 'Personal',
      role: '',
      organisation: '',
      status: 'Active',
      startYear: '',
      endYear: '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      disciplines: ['Web Development', 'UI/UX', 'Accessibility'],
      thumbnail: 'assets/images/inscribe/Inscribe Banner.svg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/inscribe/',
      links: [{ label: 'Use Inscribe', url: 'https://inscribe.zambazosmedia.group' }],
      overview:
        'A minimal writing environment built as a fully client-side application, designed to encourage focus and full local control with no cloud dependency.',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Whiteboard',
      slug: 'whiteboard',
      summary: 'An offline-first card and canvas planning app with manual project files and no account required.',
      type: 'Tool',
      medium: 'Web',
      context: 'Personal',
      role: '',
      organisation: '',
      status: '',
      startYear: '',
      endYear: '',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      disciplines: ['Web Development', 'UI/UX', 'Offline-First Design'],
      thumbnail: 'assets/images/whiteboard/WhiteboardBanner.svg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/whiteboard/',
      links: [],
      overview:
        'A custom productivity app providing a limitless visual canvas for planning and organising ideas, built with offline-first principles and full local control.',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'Nebula Browser',
      slug: 'nebula-browser',
      summary: 'A desktop web browser designed for SteamOS, Steam Deck and controller-first navigation.',
      type: 'Software',
      medium: 'Web',
      context: 'Open Source',
      role: 'Developer · UI/UX Designer',
      organisation: 'The Nebula Project',
      status: 'In Development',
      startYear: '',
      endYear: 'Present',
      technologies: ['Electron'],
      disciplines: ['Desktop Software', 'UI/UX', 'Accessibility', 'Community Management'],
      thumbnail: 'assets/images/Nebula/NebulaBanner.svg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/nebula-browser/',
      links: [
        { label: 'Steam', url: 'https://store.steampowered.com/app/4290110/Nebula/' },
        { label: 'GitHub', url: 'https://github.com/NebulaZMG/NebulaBrowser' }
      ],
      overview:
        'A purpose-built web browser designed from the ground up for SteamOS, Steam Deck and controller-first interaction, built for performance and couch-friendly use.',
      roleNote:
        'I work on core application development and feature implementation, UI/UX design for controller navigation and community management of the open-source repository.',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    },

    {
      title: 'The Nebula Project',
      slug: 'nebula-project',
      summary: 'An open-source ecosystem of controller-first desktop applications for SteamOS and Steam Deck.',
      type: 'Software',
      medium: '',
      context: 'Open Source',
      role: '',
      organisation: 'The Nebula Project',
      status: 'In Development',
      startYear: '',
      endYear: 'Present',
      technologies: [],
      disciplines: ['Desktop Software', 'UI/UX', 'Design Systems', 'Open Source'],
      thumbnail: 'assets/images/Nebula/NebulaProjectBanner.svg',
      hero: '',
      featured: false,
      archived: false,
      href: 'work/nebula/',
      links: [
        { label: 'Nebula site', url: 'https://nebula.zambazosmedia.group' },
        { label: 'GitHub', url: 'https://github.com/The-Nebula-Project-ZMG' }
      ],
      overview:
        'An umbrella initiative building modern, controller-friendly desktop applications unified by shared design systems, input handling and a commitment to performance and accessibility.',
      roleNote: '',
      contributions: [],
      technicalDetails: [],
      gallery: [],
      credits: [],
      stub: false
    }
  ];

  // ---- Helpers -----------------------------------------------------------

  function typesOf(item) {
    var list = [];
    if (item.type) list.push(item.type);
    if (item.medium && item.medium !== item.type) list.push(item.medium);
    return list;
  }

  function matchesType(item, filterId) {
    if (filterId === 'all' || !filterId) return true;
    var filter = FILTERS.filter(function (f) { return f.id === filterId; })[0];
    if (!filter || !filter.types) return true;
    var types = typesOf(item);
    return types.some(function (t) { return filter.types.indexOf(t) !== -1; });
  }

  function matchesContext(item, context) {
    if (!context || context === 'All') return true;
    return item.context === context;
  }

  function yearLabel(item) {
    if (item.startYear && item.endYear) return item.startYear + '\u2013' + item.endYear;
    if (item.startYear) return String(item.startYear);
    if (item.endYear) return String(item.endYear);
    return '';
  }

  function roleLabel(item) {
    return [item.role, item.organisation].filter(Boolean).join(' \u00b7 ');
  }

  function byTitle(a, b) {
    return a.title.localeCompare(b.title);
  }

  function visible() {
    return WORK_ITEMS.filter(function (i) { return !i.archived; });
  }

  var api = {
    BASE: BASE,
    items: WORK_ITEMS,
    filters: FILTERS,
    contexts: CONTEXTS,
    stubNote: STUB_NOTE,
    resolve: resolve,
    asset: resolve,
    href: resolve,
    typesOf: typesOf,
    matchesType: matchesType,
    matchesContext: matchesContext,
    yearLabel: yearLabel,
    roleLabel: roleLabel,
    featured: function (limit) {
      var list = visible().filter(function (i) { return i.featured; });
      return typeof limit === 'number' ? list.slice(0, limit) : list;
    },
    active: function () { return visible(); },
    archived: function () { return WORK_ITEMS.filter(function (i) { return i.archived; }).sort(byTitle); },
    getBySlug: function (slug) {
      return WORK_ITEMS.filter(function (i) { return i.slug === slug; })[0] || null;
    }
  };

  if (typeof window !== 'undefined') window.WorkData = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})();
