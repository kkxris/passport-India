// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Trigger immediately visible items on load
document.querySelectorAll('.reveal').forEach(r => {
  const rect = r.getBoundingClientRect();
  if (rect.top < window.innerHeight) r.classList.add('visible');
});

// ── NAV SHADOW ON SCROLL ──
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 20);
  updateDots();
});

// ── SCROLL DOTS ──
const sections = ['home', 'services', 'reviews', 'consultation'];
const dots = document.querySelectorAll('.scroll-dot');

function updateDots() {
  let current = 0;
  sections.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 160) current = i;
  });
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) current = 4;
  dots.forEach((d, i) => d.classList.toggle('active', i === current));
}

function scrollTo_(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── CONSULTATION FORM ──
function submitConsult() {
  const name  = document.getElementById('c-name').value.trim();
  const phone = document.getElementById('c-phone').value.trim();
  if (!name || !phone) {
    alert('Please enter your name and mobile number.');
    return;
  }
  document.getElementById('consultForm').style.display = 'none';
  document.getElementById('consultSuccess').style.display = 'block';
}