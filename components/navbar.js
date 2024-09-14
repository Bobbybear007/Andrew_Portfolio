// Dynamically create and inject the navbar into the page
document.addEventListener('DOMContentLoaded', function() {
    // Get the current URL path to determine which page is active
    const currentPage = window.location.pathname;

    // Define the HTML structure for the navbar
    const navbar = `
      <header>
        <nav class="navbar">
          <ul class="navbar-menu">
            <li class="navbar-item ${currentPage.includes('index.html') ? 'active' : ''}"><a href="index.html">Work</a></li>
            <li class="navbar-item ${currentPage.includes('about.html') ? 'active' : ''}"><a href="pages/about.html">About Me</a></li>
            <li class="navbar-item ${currentPage.includes('resume.html') ? 'active' : ''}"><a href="pages/resume.html">Résumé</a></li>
          </ul>
        </nav>
      </header>
    `;
  
    // Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbar);
});
