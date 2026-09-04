// ============================================
// PORTFOLIO — Malon Christmagloire
// Animations & interactions
// ============================================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
});

// Burger menu
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// Reveal on scroll (IntersectionObserver)
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger delay based on position in parent
      const siblings = Array.from(entry.target.parentElement?.children || []);
      const idx = siblings.indexOf(entry.target);
      const delay = Math.min(idx * 80, 400);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));

// Terminal typing effect
const typedEls = document.querySelectorAll('.typed');
typedEls.forEach(el => {
  const text = el.textContent;
  el.textContent = '';
  let i = 0;
  const type = () => {
    if (i < text.length) {
      el.textContent += text[i++];
      setTimeout(type, 60 + Math.random() * 40);
    }
  };
  setTimeout(type, 800);
});

// Active nav link highlight based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href')?.split('/').pop();
  if (href === currentPage) link.classList.add('active');
  else link.classList.remove('active');
});
