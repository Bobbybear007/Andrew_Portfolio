const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init(); 
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);



function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
    }
}

init();
animate();

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('py-2');
        header.classList.remove('py-4');
    } else {
        header.classList.add('py-4');
        header.classList.remove('py-2');
    }
});

(function initResumeModal() {
    const openBtn = document.getElementById('open-resume-modal');
    const closeBtn = document.getElementById('close-resume-modal');
    const modal = document.getElementById('resume-modal');
    const iframe = document.getElementById('resume-iframe');
    const fallback = document.getElementById('resume-fallback');
    
    if (!openBtn || !closeBtn || !modal || !iframe) {
        console.warn('Resume modal elements not found.');
        return;
    }

    let loaded = false;

    function loadOnce() {
        if (loaded) return;
        iframe.src = 'assets/resumes/resume.html';
        iframe.addEventListener('load', () => {
            if (fallback) fallback.classList.add('hidden');
        }, { once: true });
        iframe.addEventListener('error', () => {
            if (fallback) fallback.classList.remove('hidden');
        }, { once: true });
        loaded = true;
    }

    function openModal() {
        loadOnce();
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
})();

