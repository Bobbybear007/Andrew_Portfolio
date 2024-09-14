window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const portal = document.querySelector('.portal');
    const background2 = document.querySelector('.background-2');
    const portalWrapper = document.querySelector('.portal-wrapper');
    const nameSloganImage = document.querySelector('.name-slogan'); // Your image element

    // Scale portal based on scroll
    const scaleAmount = Math.min(1 + scrollPosition / 100, 20); // Adjust this value for scale
    portal.style.transform = `scale(${scaleAmount})`;

    // Trigger fade out of the portal and reveal background2 when it's large enough
    if (scaleAmount >= 8) { // Trigger fade out at a specific scale threshold
        portalWrapper.style.opacity = '0'; // Fade out portal
        background2.style.opacity = '1'; // Fade in second background
        nameSloganImage.style.opacity = '1'; // Fade in the name and slogan image
    } else {
        portalWrapper.style.opacity = '1'; // Keep portal visible
        background2.style.opacity = '0'; // Keep first background visible
        nameSloganImage.style.opacity = '0'; // Keep the image hidden
    }
});
