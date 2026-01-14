document.querySelectorAll('.internal-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});

const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('active');
    }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', function() {
    const scrollDistance = window.scrollY;
    console.log('Scrolled:', scrollDistance, 'pixels');
});