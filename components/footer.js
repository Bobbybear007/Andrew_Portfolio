// Dynamically create and inject the footer into the page
document.addEventListener('DOMContentLoaded', function() {
    const footer = `
      <footer>
        <p>&copy; 2024 Andrew Zambazos. All Rights Reserved.</p>
      </footer>
    `;
  
    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footer);
  });
  