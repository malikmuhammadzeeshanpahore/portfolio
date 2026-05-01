/* =============== MOBILE MENU =============== */
const navMenu   = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose  = document.getElementById('nav-close');

if (navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
if (navClose)  navClose.addEventListener('click',  () => navMenu.classList.remove('show-menu'));

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => navMenu.classList.remove('show-menu')));

/* =============== SCROLL HEADER =============== */
window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scroll-header', window.scrollY >= 50);
});

/* =============== ACTIVE LINK ON SCROLL =============== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
        const top  = sec.offsetTop - 58;
        const id   = sec.getAttribute('id');
        const link = document.querySelector(`.nav-menu a[href*="${id}"]`);
        if (link) link.classList.toggle('active', scrollY > top && scrollY <= top + sec.offsetHeight);
    });
});

/* =============== SHOW SCROLL TOP =============== */
window.addEventListener('scroll', () => {
    document.getElementById('scroll-top').classList.toggle('show-scroll', window.scrollY >= 350);
});

/* =============== TYPING EFFECT =============== */
const words = ["WordPress Developer", "Digital Marketer", "Vibe Coder", "UI/UX Enthusiast"];
let wIdx = 0, cIdx = 0, deleting = false;
const typingEl = document.querySelector('.typing-text');

function type() {
    if (!typingEl) return;
    const word = words[wIdx];
    typingEl.textContent = deleting
        ? word.substring(0, cIdx - 1)
        : word.substring(0, cIdx + 1);
    deleting ? cIdx-- : cIdx++;
    let speed = deleting ? 45 : 95;
    if (!deleting && cIdx === word.length) { speed = 2000; deleting = true; }
    else if (deleting && cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; speed = 400; }
    setTimeout(type, speed);
}
document.addEventListener('DOMContentLoaded', () => { if (typingEl) setTimeout(type, 800); });

/* =============== SCROLL REVEAL =============== */
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* =============== SKILL BAR ANIMATION =============== */
const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.querySelectorAll('.skill-progress').forEach(bar => bar.classList.add('animated'));
            skillObs.unobserve(e.target);
        }
    });
}, { threshold: 0.3 });
document.querySelectorAll('.skills-card').forEach(card => skillObs.observe(card));
