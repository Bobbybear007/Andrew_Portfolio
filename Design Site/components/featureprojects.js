// projects.js

// Insert the projects section into the page
const projectsSection = `
<section class="portfolio-section" id="projects">
  <h2>Featured Projects</h2>
  &nbsp;
  <div class="gallery">
    <!-- Project Cards -->
    <a href="projects/trains/trains.html" class="project-link">
      <div class="project-card">
        <div class="project-info">
          <h2>Phantom Rails: Where Reality Derails</h2>
          <h3>NCEA Level 2 Art Boards</h3>
          <p>This project was created for NCEA Level 2 Photography. I explored using trains as the subject in surrealist photography.</p>
        </div>
        <div class="arrow-icon">
          <span>→</span>
        </div>
      </div>
    </a>
   
   
    <a href="projects/moon/moon.html" class="project-link">
      <div class="project-card">
        <div class="project-info">
          <h2>MOONLIGHT</h2>
          <p>The moon as seen from New Zealand</p>
        </div>
        <div class="arrow-icon">
          <span>→</span>
        </div>
      </div>
    </a>
   
    
  </div>
</section>
`;

// Add the projects section to the appropriate place in the HTML
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('projects-container').innerHTML = projectsSection;
});
