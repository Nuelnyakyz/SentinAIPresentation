document.addEventListener('DOMContentLoaded', function() {
    // Create the modal container if it doesn't separate in HTML, but here we expect it in HTML
    // actually, let's inject it via JS or expect it in HTML. 
    // Let's rely on it being in HTML for cleaner separation.

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');

    // Get all images that should be zoomable (e.g., inside .showcase-img or .hero-content)
    // The user said "any of the images", but probably means the screenshots. 
    // Let's target .showcase-img img and .hero-img
    const images = document.querySelectorAll('.showcase-img img, .hero-img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            // distinct blur effect is handled by CSS on the modal background
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close on clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
