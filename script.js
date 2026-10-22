(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-nav');
  const header = document.getElementById('site-header');

  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  }
  menuButton.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  document.addEventListener('click', e => {
    if (!menu.hidden && !header.contains(e.target)) setMenu(false);
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 980 && !menu.hidden) setMenu(false); });

  const descriptions = {
    heroTable: 'Welcoming restaurant and dining space', heroFood: 'Beautifully presented dinner',
    heroGuests: 'People coming together', heroDetails: 'Thoughtful dining table details',
    aboutKitchen: 'Cooking preparations in a kitchen', aboutTable: 'A freshly served meal',
    servicePrivate: 'A thoughtfully prepared private table', serviceSupper: 'Dinner table ready for guests',
    serviceEvents: 'Sharing seasonal food at an event', process: 'Cooking in preparation for dinner',
    galleryOne: 'Dining setting (sample photo)', galleryTwo: 'Fresh food (sample photo)',
    galleryThree: 'Table details (sample photo)', galleryFour: 'A meal to share (sample photo)',
    nextClub: 'Dinner table inspiration for the upcoming supper club', contact: 'Food around a table'
  };
  const photos = window.MOMENTS_IMAGES || {};
  document.querySelectorAll('[data-photo]').forEach((slot, index) => {
    const key = slot.dataset.photo;
    const src = typeof photos[key] === 'string' ? photos[key].trim() : '';
    slot.setAttribute('role', 'img');
    slot.setAttribute('aria-label', src ? descriptions[key] || 'Food and gathering photograph' : `${slot.dataset.placeholder} — add your photo in images.js`);
    if (!src) return;
    const img = document.createElement('img');
    img.alt = '';
    img.loading = index < 4 ? 'eager' : 'lazy';
    img.decoding = 'async';
    if (index === 0) img.fetchPriority = 'high';
    img.addEventListener('load', () => slot.classList.add('is-loaded'), { once: true });
    img.addEventListener('error', () => slot.classList.add('has-error'), { once: true });
    img.src = src;
    slot.appendChild(img);
  });

  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Indicate the current section without hiding or changing scroll behavior.
  const navLinks = Array.from(document.querySelectorAll('.desktop-nav a'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.toggle('active', a.hash === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
  }
})();
