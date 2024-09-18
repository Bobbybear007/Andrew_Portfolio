document.addEventListener("DOMContentLoaded", function() {
    const navbar = `
      <header>
        <div class="navbar-container">
          <nav class="navbar">
            <ul class="navbar-menu">
              <li class="navbar-item"><a href="#home">About</a></li>
              <li class="navbar-item"><a href="#projects">Projects</a></li>
              <li class="navbar-item"><a href="https://www.andrewzambazos.com">Main Site</a></li>
              <li class="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div class="social-icons">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
          </div>
        </div>
      </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbar);
  });
  