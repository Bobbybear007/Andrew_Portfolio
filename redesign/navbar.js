(function initNavbar(){
  function ensureIconLibrary(){
    const id = 'fa-cdn-stylesheet';
    if (!document.getElementById(id)){
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css';
      document.head.appendChild(link);
    }
  }
  function augmentNav(){
    const header = document.getElementById('header');
    if (!header) return;
    const desktopNav = header.querySelector('nav');
    const mobileMenu = document.getElementById('mobile-menu');

    function makeLink({ href, text, classes = '', attrs = {} }){
      const a = document.createElement('a');
      a.setAttribute('href', href);
      if (text) a.textContent = text;
      if (classes) a.setAttribute('class', classes);
      for (const [k,v] of Object.entries(attrs)) a.setAttribute(k, v);
      return a;
    }

    if (desktopNav) {
      const hasHome = !!desktopNav.querySelector('a[data-nav="home"], a[href="#home"], a[href*="index.html#home"]');
      if (!hasHome) {
        const home = makeLink({
          href: '#home',
          text: 'Home',
          classes: 'hover:text-[#00D4FF] transition-colors duration-300',
          attrs: { 'data-nav': 'home' }
        });
        const firstChild = desktopNav.firstElementChild;
        if (firstChild) desktopNav.insertBefore(home, firstChild); else desktopNav.appendChild(home);
      }

      let social = desktopNav.querySelector('[data-nav="social"]');
      if (!social) {
        social = document.createElement('div');
        social.setAttribute('data-nav', 'social');
  social.setAttribute('class', 'flex items-center gap-4 ml-2');

        function addIcon(href, label, iconClass){
          const a = document.createElement('a');
          a.href = href;
          if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
          a.setAttribute('aria-label', label);
          a.setAttribute('class', 'text-gray-400 hover:text-white transition-colors duration-300 px-2 py-1');
          const i = document.createElement('i');
          i.className = iconClass + ' text-xl';
          a.appendChild(i);
          social.appendChild(a);
        }

  addIcon('https://github.com/Bobbybear007', 'GitHub', 'fa-brands fa-github');
  addIcon('https://www.linkedin.com/in/andrewzambazos/', 'LinkedIn', 'fa-brands fa-linkedin-in');
  addIcon('mailto:andrewzambazos@gmail.com', 'Email', 'fa-solid fa-envelope');
  addIcon('https://www.youtube.com/@Zambazos', 'YouTube', 'fa-brands fa-youtube');

        desktopNav.appendChild(social);
      }

      if (social && !desktopNav.querySelector('[data-nav="divider-desktop"]')) {
        const divider = document.createElement('span');
        divider.setAttribute('data-nav', 'divider-desktop');
        divider.setAttribute('aria-hidden', 'true');
        divider.setAttribute('class', 'mx-3 h-5 w-px bg-gray-600 opacity-60 hidden sm:inline-block self-center');
        divider.style.cssText += 'display:inline-block;height:20px;width:1px;background-color:#4B5563;opacity:0.6;margin-left:0.75rem;margin-right:0.75rem;vertical-align:middle;align-self:center;';
        desktopNav.insertBefore(divider, social);
      }

      const contactLinks = desktopNav.querySelectorAll('a[href*="#contact"]');
      contactLinks.forEach(a => {
        a.setAttribute('class', 'hover:text-[#00D4FF] transition-colors duration-300');
      });
    }

    if (mobileMenu) {
      const hasHomeM = !!mobileMenu.querySelector('a[data-nav="home"], a[href="#home"], a[href*="index.html#home"]');
      if (!hasHomeM) {
        const homeM = makeLink({
          href: '#home',
          text: 'Home',
          classes: 'block py-2 hover:text-[#00D4FF]',
          attrs: { 'data-nav': 'home' }
        });
        const firstChildM = mobileMenu.firstElementChild;
        if (firstChildM) mobileMenu.insertBefore(homeM, firstChildM); else mobileMenu.appendChild(homeM);
      }

      let socialM = mobileMenu.querySelector('[data-nav="social"]');
      if (!socialM) {
        socialM = document.createElement('div');
        socialM.setAttribute('data-nav', 'social');
  socialM.setAttribute('class', 'flex items-center gap-5 py-2 mt-2');

        function addIconM(href, label, iconClass){
          const a = document.createElement('a');
          a.href = href;
          if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
          a.setAttribute('aria-label', label);
          a.setAttribute('class', 'text-gray-400 hover:text-white transition-colors duration-300 px-2 py-1');
          const i = document.createElement('i');
          i.className = iconClass + ' text-2xl';
          a.appendChild(i);
          socialM.appendChild(a);
        }

  addIconM('https://github.com/Bobbybear007', 'GitHub', 'fa-brands fa-github');
  addIconM('https://www.linkedin.com/in/andrewzambazos/', 'LinkedIn', 'fa-brands fa-linkedin-in');
  addIconM('mailto:andrewzambazos@gmail.com', 'Email', 'fa-solid fa-envelope');
  addIconM('https://www.youtube.com/@Zambazos', 'YouTube', 'fa-brands fa-youtube');

        mobileMenu.appendChild(socialM);
      }

      if (socialM && !mobileMenu.querySelector('[data-nav="divider-mobile"]')) {
        const dividerM = document.createElement('div');
        dividerM.setAttribute('data-nav', 'divider-mobile');
        dividerM.setAttribute('aria-hidden', 'true');
        dividerM.setAttribute('class', 'my-2 h-px w-full bg-gray-700 opacity-50');
        dividerM.style.cssText += 'height:1px;width:100%;background-color:#374151;opacity:0.5;margin-top:0.5rem;margin-bottom:0.5rem;';
        mobileMenu.insertBefore(dividerM, socialM);
      }

      const contactLinksM = mobileMenu.querySelectorAll('a[href*="#contact"]');
      contactLinksM.forEach(a => {
        a.setAttribute('class', 'block py-2 hover:text-[#00D4FF]');
      });
    }
  }

  function computeBasePrefix() {
    try {
      const scripts = document.getElementsByTagName('script');
      let navbarSrc = null;
      for (let i = 0; i < scripts.length; i++) {
        const s = scripts[i];
        if (s.src && s.src.endsWith('navbar.js')) { navbarSrc = s.src; break; }
      }
      if (!navbarSrc) return '';
      const url = new URL(navbarSrc, window.location.href);
      const parts = url.pathname.split('/');
      parts.pop(); // remove navbar.js
      const rootPath = parts.join('/') + '/';
      const current = window.location.pathname;
      function relative(from, to){
        const fa = from.split('/').filter(Boolean);
        const ta = to.split('/').filter(Boolean);
        if (fa.length && fa[fa.length-1].includes('.')) fa.pop();
        let i=0; while (i<fa.length && i<ta.length && fa[i]===ta[i]) i++;
        const up = fa.slice(i).map(_=> '..');
        const down = ta.slice(i);
        const rel = [...up, ...down].join('/');
        return rel ? rel + '/' : '';
      }
      const prefix = relative(current, rootPath);
      return prefix;
    } catch { return ''; }
  }

  function setHref(a, path) {
    if (!a) return;
    a.setAttribute('href', path);
  }

  function normalizeLinks(prefix){
    const nav = document.querySelector('header nav');
    const mobile = document.getElementById('mobile-menu');
    if (!nav && !mobile) return;

    const map = [
      { selector: 'a[href*="#home"]', path: prefix + 'index.html#home' },
      { selector: 'a[href*="#about"]', path: prefix + 'index.html#about' },
      { selector: 'a[href*="#contact"]', path: prefix + 'index.html#contact' },
      { selector: 'a[href*="resume.html"], a[href*="#resume"]', path: prefix + 'assets/resumes/resume.html' },
      { selector: 'a[href$="index.html"]', path: prefix + 'index.html' },
      { selector: 'a[href*="projects.html"]', path: prefix + 'projects.html' }
    ];

    const scopes = [nav, mobile].filter(Boolean);
    for (const scope of scopes) {
      for (const m of map) {
        const links = scope.querySelectorAll(m.selector);
        links.forEach(a => setHref(a, m.path));
      }
    }
  }

  function setupMobileMenu(){
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', ()=> menu.classList.toggle('hidden'));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> menu.classList.add('hidden')));
  }

  function init(){
  ensureIconLibrary();
  augmentNav();
    const prefix = computeBasePrefix();
    normalizeLinks(prefix);
    setupMobileMenu();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
