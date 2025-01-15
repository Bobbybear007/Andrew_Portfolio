document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
      top: document.querySelector('.projects-section').offsetTop,
      behavior: 'smooth'
    });
  });
  