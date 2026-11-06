(() => {
  // Public demo credentials are deliberately non-sensitive and only for this static demo.
  const DEMO_EMAIL = 'demo@taskly.app';
  const DEMO_PASSWORD = 'TasklyDemo2026!';
  const button = document.getElementById('demoLoginButton');
  if (!button) return;

  button.addEventListener('click', async () => {
    const original = button.innerHTML;
    button.disabled = true;
    button.textContent = 'Preparing demo account…';
    const error = document.getElementById('authError');
    try {
      if (!window.crypto?.subtle || !window.crypto?.randomUUID) {
        throw new Error('Open the published HTTPS site to use demo login.');
      }
      const accountsKey = 'taskly.accounts.v1';
      const accounts = JSON.parse(localStorage.getItem(accountsKey) || '{}');
      const salt = crypto.randomUUID();
      const encoder = new TextEncoder();
      const key = await crypto.subtle.importKey('raw', encoder.encode(DEMO_PASSWORD), 'PBKDF2', false, ['deriveBits']);
      const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', salt: encoder.encode(salt), iterations: 120000, hash: 'SHA-256' }, key, 256);
      const hash = [...new Uint8Array(bits)].map(byte => byte.toString(16).padStart(2, '0')).join('');
      // Reset this public sample account to known demo credentials on each use.
      accounts[DEMO_EMAIL] = { name: 'Taskly Demo', salt, hash };
      localStorage.setItem(accountsKey, JSON.stringify(accounts));
      document.getElementById('authEmail').value = DEMO_EMAIL;
      document.getElementById('authPassword').value = DEMO_PASSWORD;
      document.getElementById('authName').value = 'Taskly Demo';
      document.getElementById('authError').textContent = '';
      document.getElementById('authForm').requestSubmit();
    } catch (err) {
      if (error) error.textContent = err.message || 'Could not prepare the demo login.';
      button.innerHTML = original;
      button.disabled = false;
    }
  });
})();
