/* ==============================
   CURSOR — js/cursor.js
   ============================== */

(function () {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');

  // Don't init on touch-only devices
  if (!cursor || !follower || window.matchMedia('(hover: none)').matches) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;
  let rafId;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth follower via RAF
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top  = followerY + 'px';
    rafId = requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover states
  const hoverTargets = 'a, button, .project-card, .skill-card, .btn, .tag, .social-link';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.add('hovering');
      follower.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverTargets)) {
      cursor.classList.remove('hovering');
      follower.classList.remove('hovering');
    }
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '1';
  });
})();
