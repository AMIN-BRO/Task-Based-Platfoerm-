(() => {
  'use strict';
  // The demo and guest flows intentionally create a local demo session; no server or crypto API needed.
  const SESSION_KEY = 'taskly.session.v1';
  const DEMO_USER = { email: 'demo@taskly.app', name: 'Taskly Demo', guest: true };
  const GUEST_USER = { email: 'guest', name: 'Guest', guest: true };

  function enterDemo(user) {
    const error = document.getElementById('authError');
    const controls = [document.getElementById('guestButton'), document.getElementById('demoLoginButton')].filter(Boolean);
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
      // A reload lets the main app initialize its own state from the session consistently.
      window.location.reload();
    } catch (e) {
      if (error) error.textContent = 'Could not start the demo in this browser. Please enable site storage and reload.';
      controls.forEach(button => { button.disabled = false; });
    }
  }

  // Capture before the app's own listeners. This keeps both entry options reliable if
  // browser crypto is unavailable or the cached app bundle has an outdated handler.
  document.addEventListener('click', event => {
    const button = event.target.closest('#guestButton, #demoLoginButton');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    button.disabled = true;
    button.textContent = button.id === 'guestButton' ? 'Opening guest workspace…' : 'Opening demo workspace…';
    enterDemo(button.id === 'guestButton' ? GUEST_USER : DEMO_USER);
  }, true);
})();
