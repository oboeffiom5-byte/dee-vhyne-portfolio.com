/* ===== DARK MODE ===== */
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  if (!themeToggle) return;
  themeToggle.innerHTML = theme === 'dark'
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}

/* ===== MOBILE NAV ===== */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  })
);

/* ===== NAVBAR SCROLL SHADOW ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 20);
  scrollTopBtn?.classList.toggle('visible', window.scrollY > 300);
});

/* ===== SCROLL TO TOP ===== */
const scrollTopBtn = document.getElementById('scrollTop');

/* ===== REVEAL ON SCROLL ===== */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ===== SKILL BAR ANIMATION ===== */
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.dataset.width + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

/* ===== COUNTER ANIMATION ===== */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.counter').forEach(counter => {
      const target = +counter.dataset.target;
      const step   = Math.ceil(target / 40);
      let current  = 0;
      const tick   = () => {
        current = Math.min(current + step, target);
        counter.textContent = current + (target > 10 ? '+' : '');
        if (current < target) requestAnimationFrame(tick);
      };
      tick();
    });
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.4 });

document.querySelectorAll('.stats-bar').forEach(el => counterObserver.observe(el));

/* ===== TYPING EFFECT ===== */
const typedEl = document.getElementById('typedText');
if (typedEl) {
  const words   = ['Web Developer.', 'UI Designer.', 'Problem Solver.', 'Freelancer.'];
  let wIdx = 0, cIdx = 0, deleting = false;

  (function type() {
    const word = words[wIdx];
    typedEl.textContent = deleting ? word.slice(0, --cIdx) : word.slice(0, ++cIdx);

    if (!deleting && cIdx === word.length) {
      setTimeout(() => { deleting = true; setTimeout(type, 80); }, 1800);
      return;
    }
    if (deleting && cIdx === 0) {
      deleting = false;
      wIdx = (wIdx + 1) % words.length;
    }
    setTimeout(type, deleting ? 60 : 110);
  })();
}

/* ===== TESTIMONIAL CAROUSEL ===== */
const track  = document.getElementById('testimonialTrack');
const dotsEl = document.getElementById('carouselDots');
const cards  = track?.children;

if (track && cards) {
  let current = 0;
  const total = cards.length;

  // Build dots
  for (let i = 0; i < total; i++) {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  }

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsEl.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === current)
    );
  }

  document.getElementById('nextBtn')?.addEventListener('click', () => goTo(current + 1));
  document.getElementById('prevBtn')?.addEventListener('click', () => goTo(current - 1));

  // Auto-advance
  setInterval(() => goTo(current + 1), 4500);
}

/* ===== WORK FILTER TABS ===== */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.work-card').forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
      // Re-trigger reveal animation
      if (match) {
        card.style.animation = 'none';
        requestAnimationFrame(() => { card.style.animation = ''; });
      }
    });
  });
});

/* ===== CONTACT FORM (EmailJS) ===== */
emailjs.init('YOUR_PUBLIC_KEY');

const contactForm = document.getElementById('contactForm');
const formStatus  = document.getElementById('formStatus');

contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  formStatus.textContent = '';

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm)
    .then(() => {
      formStatus.style.color = '#22c55e';
      formStatus.textContent = '✅ Message sent! I\'ll get back to you soon.';
      contactForm.reset();
    })
    .catch(() => {
      formStatus.style.color = '#ef4444';
      formStatus.textContent = '❌ Something went wrong. Please try again.';
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
      setTimeout(() => { formStatus.textContent = ''; }, 6000);
    });
});
