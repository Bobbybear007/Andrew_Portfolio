const footerText = document.querySelector("footer p");

if (footerText) {
  const year = new Date().getFullYear();
  footerText.innerHTML = `&copy; ${year} Andrew Zambazos. All Rights Reserved.`;
}
