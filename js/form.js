/* ==============================
   FORM — js/form.js
   ============================== */

(function () {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showNote('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNote('Please enter a valid email address.', 'error');
      return;
    }

    // Build mailto link as a reliable no-backend fallback
    const subject  = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body     = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const mailto   = `mailto:dineshyadav.2022@cic.du.ac.in?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailto;

    showNote('Opening your email client... ✉️', 'success');
    form.reset();
  });

  function showNote(msg, type) {
    note.textContent = msg;
    note.style.color = type === 'error' ? '#f47a7a' : 'var(--accent)';
    setTimeout(() => { note.textContent = ''; }, 5000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
})();
