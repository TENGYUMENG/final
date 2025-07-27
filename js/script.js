// Add scroll animation effect
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.content-text, .gallery-img').forEach(el => {
        observer.observe(el);
    });
});