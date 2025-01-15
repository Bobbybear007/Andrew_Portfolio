document.addEventListener("DOMContentLoaded", function() {
  const footer = `
    <footer>
      <div class="footer-container">
        <div class="footer-contact">
          <h2>Andrew Zambazos</h2>
          <p>Game / Digital Development</p>
          <!-- Wrapped button in a container with additional margin -->
          <div class="button-container">
            <button class="portfolio-btn" onclick="window.location.href='https://andrewzambazos.com';">Back to Main Portfolio</button>
          </div>
        </div>
        <div class="footer-social">
            <a href="https://www.youtube.com/@Zambazos" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/andrewzambazos/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/Bobbybear007" target="_blank"><i class="fab fa-github"></i></a>
        </div>
      </div>
      <p class="footer-rights">© 2024 Andrew Zambazos. All rights reserved.</p>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footer);
});
