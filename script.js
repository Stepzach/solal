(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobile-nav');
  const main = document.getElementById('main');
  const mobile = window.matchMedia('(max-width: 960px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let menuOpen = false;

  // Keep the panel rendered so both opening and closing can animate.
  // Inert and aria-hidden prevent access to the closed panel.
  menu.hidden = false;
  menu.inert = true;
  menu.setAttribute('aria-hidden', 'true');

  function setMenuOpen(open, restoreFocus = false) {
    menuOpen = open && mobile.matches;
    menuButton.setAttribute('aria-expanded', String(menuOpen));
    menuButton.setAttribute('aria-label', menuOpen ? 'Close navigation menu' : 'Open navigation menu');
    menu.classList.toggle('is-open', menuOpen);
    menu.inert = !menuOpen;
    menu.setAttribute('aria-hidden', String(!menuOpen));
    main.inert = menuOpen;
    document.documentElement.classList.toggle('menu-open', menuOpen);
    if (restoreFocus) menuButton.focus({ preventScroll: true });
  }

  menuButton.addEventListener('click', () => setMenuOpen(!menuOpen));
  document.addEventListener('keydown', event => {
    if (!menuOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setMenuOpen(false, true);
    } else if (event.key === 'Tab') {
      const links = Array.from(menu.querySelectorAll('a'));
      const controls = [menuButton, ...links];
      const index = controls.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) {
        event.preventDefault();
        controls[controls.length - 1].focus();
      } else if (!event.shiftKey && (index === controls.length - 1 || index === -1)) {
        event.preventDefault();
        menuButton.focus();
      }
    }
  });
  mobile.addEventListener('change', () => {
    if (!mobile.matches) {
      const hadMenuFocus = menu.contains(document.activeElement) || document.activeElement === menuButton;
      setMenuOpen(false);
      if (hadMenuFocus) {
        const activeLink = document.querySelector('.desktop-nav a[aria-current]') || document.querySelector('.desktop-nav a');
        activeLink.focus({ preventScroll: true });
      }
    }
  });

  // Preserve the site's clean URL while making section links work with a keyboard.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const destination = document.getElementById(link.hash.slice(1));
      if (!destination) return;
      event.preventDefault();
      setMenuOpen(false);
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
      destination.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
    });
  });

  // A single reading line makes selection deterministic, including scrolling upwards.
  // The process spread belongs to Experiences, so that link stays active through it.
  const links = Array.from(document.querySelectorAll('.site-header nav a'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  let scheduled = false;
  function updateActiveSection() {
    scheduled = false;
    const readingLine = window.innerHeight * 0.35;
    let current = sections[0];
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= readingLine) current = section;
    });
    const id = current.id === 'process' ? 'beliefs' : current.id;
    links.forEach(link => {
      const active = link.hash === `#${id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateActiveSection);
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  updateActiveSection();

  const year = document.getElementById('copyright-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
