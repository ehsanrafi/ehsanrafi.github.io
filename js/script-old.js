document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = Array.from(document.querySelectorAll('.section'));

  // Default to scroll mode
  document.body.classList.add('scroll-mode');

  function showSection(id) {
    if (document.body.classList.contains('overlay-mode')) {
      // Overlay mode: only one section visible
      sections.forEach(section => {
        section.classList.toggle('active', section.id === id);
      });

      navLinks.forEach(link => {
        const isActive = link.dataset.target === id;
        link.classList.toggle('active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    } else {
      // Scroll mode: smooth scroll to section
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      const targetId = link.dataset.target;
      if (!targetId) return;
      showSection(targetId);

      if (history.pushState) {
        history.pushState(null, '', '#' + targetId);
      } else {
        location.hash = '#' + targetId;
      }
    });
  });

  // Toggle mode with M key
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm') {
      document.body.classList.toggle('overlay-mode');
      document.body.classList.toggle('scroll-mode');
      console.log('Mode switched:', document.body.classList.contains('overlay-mode') ? 'Overlay' : 'Scroll');
    }
  });

  // Initialize based on hash
  const initialHash = location.hash ? location.hash.replace('#', '') : 'intro';
  showSection(initialHash);
});
