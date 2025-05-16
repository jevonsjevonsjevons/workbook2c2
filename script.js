console.log("JS loaded!");

// Preload click sound
const clickSound = new Audio('sounds/grindrsound.mp3');
clickSound.volume = 0.5;

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('custom-cursor');
  const isProjectPage = window.location.pathname.toLowerCase().includes("project");

  // === Age Gate Logic ===
  const ageGate = document.getElementById('age-gate');
  const enterBtn = document.getElementById('enterSite');

  if (!localStorage.getItem('ageGateShown') && ageGate && enterBtn) {
    ageGate.classList.add('show');
    enterBtn.addEventListener('click', () => {
      ageGate.classList.remove('show');
      localStorage.setItem('ageGateShown', 'true');
    });
  } else if (ageGate) {
    ageGate.classList.remove('show');
  }

  // === Custom Cursor Emoji ===
  cursor.textContent = isProjectPage ? "🍆" : "👀";

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  // === Hover Emoji Swap ===
  const hoverTargets = document.querySelectorAll('.project-card, .filter, button, #backBtn, .icon a');
  hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursor.textContent = isProjectPage && target.id === "backBtn" ? '🥴' : '🫦';
      cursor.classList.add('hovering');
    });
    target.addEventListener('mouseleave', () => {
      cursor.textContent = isProjectPage ? '🍆' : '👀';
      cursor.classList.remove('hovering');
    });
  });

  // === Click 💦 Explosion ===
  document.addEventListener('click', (e) => {
    for (let i = 0; i < 8; i++) {
      const drop = document.createElement('div');
      drop.classList.add('spill-emoji');
      drop.textContent = '💦';
      drop.style.left = `${e.clientX}px`;
      drop.style.top = `${e.clientY}px`;

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 80 + 20;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      drop.animate([
        { transform: `translate(-50%, -50%)`, opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(0.6)`, opacity: 0 }
      ], {
        duration: 400,
        easing: 'ease-out',
        fill: 'forwards'
      });

      document.body.appendChild(drop);
      setTimeout(() => drop.remove(), 400);
    }

    const target = e.target;
    const clickable = target.closest('button, .filter, .project-card, .icon a, #backBtn');
    if (clickable) {
      clickSound.currentTime = 0;
      clickSound.play();
    }
  });

  // === Sidebar Highlighting ===
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    const path = window.location.pathname.toLowerCase();
    document.querySelectorAll('.sidebar .icon').forEach(icon => {
      const page = icon.getAttribute('data-page');
      if (page && path.includes(page)) {
        icon.classList.add('active');
      }
    });
  }

  // === Filter Buttons ===
  const filterButtons = document.querySelectorAll('.filter');
  const projectLinks = document.querySelectorAll('.project-link');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const filterValue = button.getAttribute('data-filter');
      projectLinks.forEach(link => {
        const category = link.getAttribute('data-category');
        link.style.display = (filterValue === 'all' || category === filterValue) ? 'block' : 'none';
      });
    });
  });
});
