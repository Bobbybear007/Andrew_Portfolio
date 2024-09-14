// Dynamically create and inject the navbar into the page
document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
      <header>
        <nav class="navbar">
          <ul class="navbar-menu">
            <li class="navbar-item active"><a href="index.html">Work</a></li>
            <li class="navbar-item"><a href="pages/about.html">About Me</a></li>
            <li class="navbar-item"><a href="pages/resume.html">Résumé</a></li>
            <li class="navbar-item"><a href="mailto:andrewzambazos@gmail.com" class="btn-contact">Contact</a></li>
          </ul>
          <ul class="navbar-social">
            <li><a href="https://twitter.com/yourprofile" target="_blank" class="social-btn"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-btn"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/yourprofile" target="_blank" class="social-btn"><i class="fab fa-github"></i></a></li>
          </ul>
        </nav>
      </header>
    `;
  
    // Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbar);
});
