// Dynamically create and inject the navbar and social media icons
document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
      <header>
        <nav class="navbar-container">
          <div class="navbar">
            <ul class="navbar-menu">
              <li class="navbar-item active"><a href="index.html">Home</a></li>
              <li class="navbar-item"><a href="pages/about.html">About</a></li>
              <li class="navbar-item"><a href="pages/resume.html">Résumé</a></li>
              <li class="navbar-item"><a href="mailto:andrewzambazos@gmail.com" class="btn-contact">Contact</a></li>
            </ul>
          </div>
          <div class="social-icons">
            <a href="https://www.youtube.com/@Zambazos" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/andrewzambazos/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/Bobbybear007" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </nav>
      </header>
    `;
  
    // Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbar);
});


