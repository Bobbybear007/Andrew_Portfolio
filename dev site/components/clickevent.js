document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const imgClone = img.cloneNode();
            modal.innerHTML = '';
            modal.appendChild(imgClone);
            modal.classList.add("active");
        });
    });

    modal.addEventListener("click", () => {
        modal.classList.remove("active");
    });
});
