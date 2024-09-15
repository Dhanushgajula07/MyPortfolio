document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.querySelector('.theme-btn');
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
    
    // Add animation for scrolling elements into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
});
