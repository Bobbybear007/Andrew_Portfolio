window.onload = function() {
    const sweepLine = document.createElement('div');
    sweepLine.classList.add('sweep-line');
    document.body.appendChild(sweepLine);

    // Generate continuous particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        document.body.appendChild(particle);
    }

    // Once the bar is done sweeping
    setTimeout(() => {
        // Neon header fades in and grows after the sweep
        const neonHeader = document.getElementById('neon-header');
        neonHeader.style.opacity = '1';
        neonHeader.style.transform = 'translateY(-50%) scale(1)';
    }, 2000); // Matches the sweep animation duration

    setTimeout(() => {
        // Show content with a fade-in effect
        const content = document.getElementById('content');
        content.classList.add('show');
        
        // Allow scrolling after the animation is done
        document.body.classList.add('allow-scroll');
    }, 4000); // Adjust timing to allow for header animation to complete
};



// Function to create and position particles dynamically
function createParticles() {
    // Clear any existing particles
    document.querySelectorAll('.particle').forEach(particle => particle.remove());

    // Generate continuous particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        document.body.appendChild(particle);
    }
}

// Call the function to initially create particles
createParticles();

// Update particle positions when the window is resized
window.addEventListener('resize', createParticles);

// Once the bar is done sweeping
setTimeout(() => {
    const neonHeader = document.getElementById('neon-header');
    neonHeader.style.opacity = '1';
    neonHeader.style.transform = 'translateY(-50%) scale(1)';
}, 2000);

// Show content with a fade-in effect
setTimeout(() => {
    const content = document.getElementById('content');
    content.classList.add('show');
    document.body.classList.add('allow-scroll');
}, 4000);
