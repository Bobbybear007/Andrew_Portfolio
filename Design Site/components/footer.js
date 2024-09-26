document.addEventListener("DOMContentLoaded", function() {
  const footer = `
    <footer>
      <div class="footer-container">
        <div class="footer-contact">
          <h2>Andrew Zambazos</h2>
          <p>Design & Photography Portfolio</p>
          <!-- Wrapped button in a container with additional margin -->
          <div class="button-container">
            <button class="portfolio-btn" onclick="window.location.href='https://andrewzambazos.com';">Back to Main Portfolio</button>
          </div>
        </div>
        <div class="footer-social">
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-behance"></i></a>
        </div>
      </div>
      <p class="footer-rights">© 2024 Andrew Zambazos. All rights reserved.</p>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footer);
});
