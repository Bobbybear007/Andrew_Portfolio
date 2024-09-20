// projects.js

// Insert the projects section into the page
const projectsSection = `
<section class="portfolio-section" id="projects">
  <h2>Featured Projects</h2>
  &nbsp;
  <div class="gallery">
    <!-- Project Cards -->
    <div class="project-card">
      <div class="project-info">
        <h2>MOONLIGHT</h2>
        <p>How the world looks when lit by the moon</p>
      </div>
      <div class="arrow-icon">
        <span>→</span>
      </div>
    </div>
    <div class="project-card">
      <div class="project-info">
        <h2>Graphic Design: Poster Series</h2>
        <p>Conceptual poster designs that reflect bold typography and vibrant colors.</p>
      </div>
      <div class="arrow-icon">
        <span>→</span>
      </div>
    </div>
    <div class="project-card">
      <div class="project-info">
        <h2>Photography: Portrait Series</h2>
        <p>Capturing human emotion and identity through detailed portraiture.</p>
      </div>
      <div class="arrow-icon">
        <span>→</span>
      </div>
    </div>
  </div>
</section>
`;

// Add the projects section to the appropriate place in the HTML
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('projects-container').innerHTML = projectsSection;
});