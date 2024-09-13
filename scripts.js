// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create the animation for the portal to grow and fade as you scroll
gsap.to(".portal", {
  scale: 10, // Grow the portal even larger, bigger than the screen
  opacity: 0, // Fade out as it grows larger
  scrollTrigger: {
    trigger: ".portal-container", // Trigger on the portal container
    start: "top top", // Start when the top of the portal is at the top of the viewport
    end: "bottom top", // End when the bottom of the portal reaches the top
    scrub: true, // Smooth animation based on scroll
    pin: true, // Pin the portal during scrolling
    markers: false // Turn off markers for cleaner display
  }
});
