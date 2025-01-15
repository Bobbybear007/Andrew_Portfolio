document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
      <header>
        <div class="navbar-container">
          <nav class="navbar">
            <ul class="navbar-menu">
              
              <li class="navbar-item"><a href="https://www.andrewzambazos.com">Main Site</a></li>
              <li class="navbar-item"><a href="https://www.design.andrewzambazos.com">Photography Site</a></li>
              
              
            </ul>
          </nav>
          <div class="social-icons">
            <a href="https://www.youtube.com/@Zambazos" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/andrewzambazos/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/Bobbybear007" target="_blank"><i class="fab fa-github"></i></a>
            
          </div>
        </div>
      </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbar);
  });
  
