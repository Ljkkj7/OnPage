// Nav scroll effect — dark over hero, light after
const nav = document.getElementById('nav');
const heroWrap = document.querySelector('.hero-wrap');
function updateNav() {
    const heroBottom = heroWrap.getBoundingClientRect().bottom;
    if (heroBottom <= 0) {
        nav.classList.add('light');
        nav.classList.remove('scrolled');
    } else {
        nav.classList.remove('light');
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }
}
window.addEventListener('scroll', updateNav);
updateNav();

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Form submit
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = 'Message sent ✓';
    btn.style.background = '#2563eb';
    btn.disabled = true;
}

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const backdrop = document.getElementById('drawer-backdrop');

function openDrawer() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeDrawer() : openDrawer();
});

// Close on backdrop tap
backdrop.addEventListener('click', closeDrawer);

// Close when a nav link is tapped
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
});

// Close on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
});