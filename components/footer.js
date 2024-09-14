// Dynamically create and inject the footer into the page
document.addEventListener('DOMContentLoaded', function() {
    const footer = `
      <footer>
        <div class="footer-container">
          <div class="footer-contact">
            <h2>Contact Me</h2>
            <p>Email: <a href="mailto:andrewzambazos@gmail.com">andrewzambazos@gmail.com</a></p>
          </div>

          <div class="footer-social">
            <a href="https://www.youtube.com/@Zambazos" target="_blank"><i class="fab fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/andrewzambazos/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/Bobbybear007" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </div>

        <p class="footer-rights">&copy; 2024 Andrew Zambazos. All Rights Reserved.</p>
      </footer>
    `;

    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footer);
});
