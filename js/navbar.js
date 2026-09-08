// navbar.js — Composant navbar partagé
const navbarHTML = `
<nav class="navbar" id="navbar">
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo">CM<span class="accent">.</span></a>
    <ul class="nav-links">
      <li><a href="../index.html#accueil">Accueil</a></li>
      <li><a href="../index.html#apropos">À propos</a></li>
      <li><a href="../index.html#competences">Compétences</a></li>
      <li><a href="../index.html#certifications">Certifications</a></li>
      <li><a href="../index.html#projets">Projets</a></li>
      <li><a href="../pages/parcours.html">Parcours</a></li>
      <li><a href="../index.html#veille">Veille</a></li>
      <li><a href="e5.html">E5</a></li>
      <li><a href="e6.html">E6</a></li>
      <li><a href="../index.html#contact">Contact</a></li>
      <li><a href="https://www.linkedin.com/in/christmagloire-malon-9b377a1b6/" target="_blank" class="btn btn-primary" style="padding:6px 14px;">LinkedIn</a></li>
    </ul>
    <div style="display:flex;align-items:center;gap:12px;">
      <button id="theme-toggle" aria-label="Changer de thème" style="background:none;border:1px solid var(--border);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:1rem;">🌙</button>
      <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</nav>
`;

document.addEventListener('DOMContentLoaded', () => {

    // Injection navbar
    const container = document.getElementById('navbar-container');
    if (container) container.innerHTML = navbarHTML;

    // Thème sauvegardé
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        const btn = document.getElementById('theme-toggle');
        if (btn) btn.textContent = '☀️';
    }

    // Scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Burger menu
    document.getElementById('burger')?.addEventListener('click', () => {
        document.querySelector('.nav-links')?.classList.toggle('open');
    });

    // Thème toggle
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.getElementById('theme-toggle').textContent = isDark ? '☀️' : '🌙';
    });

    // Active link
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath.endsWith('e5.html') && href.includes('e5.html')) link.classList.add('active');
        else if (currentPath.endsWith('e6.html') && href.includes('e6.html')) link.classList.add('active');
        else if (currentPath.endsWith('parcours.html') && href.includes('parcours.html')) link.classList.add('active');
    });

});
