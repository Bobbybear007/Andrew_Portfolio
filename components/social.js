// Dynamically create and inject the social media icons into the navbar
document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = `
      <ul class="navbar-social">
        <li><a href="https://twitter.com/yourprofile" target="_blank"><i class="fab fa-twitter"></i></a></li>
        <li><a href="https://linkedin.com/in/yourprofile" target="_blank"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="https://github.com/yourprofile" target="_blank"><i class="fab fa-github"></i></a></li>
      </ul>
    `;
  
    // Insert the social icons into the navbar
    document.querySelector('.navbar').insertAdjacentHTML('beforeend', socialIcons);
});
