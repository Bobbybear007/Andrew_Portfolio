// Dynamically create and inject the navbar into the page
document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
      <header>
        <nav class="navbar">
          <ul class="navbar-menu">
            <li class="navbar-item active"><a href="#work">Work</a></li>
            <li class="navbar-item"><a href="#info">About Me</a></li>\
            <li class="navbar-item"><a href="#info">Résumé</a></li>
          </ul>
        </nav>
      </header>
    `;
  
    // Insert the navbar at the beginning of the body
    document.body.insertAdjacentHTML('afterbegin', navbar);
  });
  