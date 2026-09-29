// Temporary internal GitHub Pages test: this key is visible to page visitors.
const AVAILABILITY_API_URL =
    'https://kelly-revenues-sections-template.trycloudflare.com/api/availability';
const AVAILABILITY_API_KEY =
  '87e393ee0a1506df4f7e7d9415ccb5f0145410ea13051337f1e72ee05197683a's

/* Independent of quotation calculations, PDF and WhatsApp output. */
(() => {
  const byId = id => document.getElementById(id);
  const button = byId('checkAvailabilityBtn');
  const status = byId('availabilityStatus');
  let active, version = 0, expiry;

  function selection() {
    const grouped = new Map();
    for (const line of document.querySelectorAll('#linesContainer .tent-line')) {
      const category = line.querySelector('.line-category').value;
      const quantity = Number(line.querySelector('.line-qty').value);
      if (!category || !Number.isInteger(quantity) || quantity < 1) return null;
      grouped.set(category, (grouped.get(category) || 0) + quantity);
    }
    const nights = Number(byId('nights').value);
    const date = byId('checkinDate').value;
    const checkout = new Date(date + 'T00:00:00Z');
    checkout.setUTCDate(checkout.getUTCDate() + nights);
    if (byId('bookingType').value === 'dholavira' || !grouped.size ||
        ![1, 2, 3].includes(nights) || !date || !Number.isFinite(+checkout) ||
        date < '2026-11-01' || checkout.toISOString().slice(0, 10) > '2027-03-07' ||
        [...grouped.values()].some(q => q > 20)) return null;
    return { nights, date, tents: [...grouped].map(([category, quantity]) => ({ category, quantity })) };
  }
  function show(message, state) {
    status.textContent = message;
    status.dataset.state = state;
    status.className = 'status' + (state === 'available' ? ' status-ok' :
      ['unavailable', 'error'].includes(state) ? ' status-warn' : '');
  }
  function reset() {
    version++;
    active?.abort(); active = null;
    clearTimeout(expiry);
    button.disabled = !selection();
    button.textContent = 'Check Availability';
    button.setAttribute('aria-busy', 'false');
    show(button.disabled ? 'Select a valid package, date, tent type and quantity (up to 20 per category).' : '', 'idle');
  }
  button.addEventListener('click', async () => {
    const data = selection();
    if (!data) return reset();
    const current = ++version;
    active = new AbortController();
    const timer = setTimeout(() => active?.abort(), 22000);
    clearTimeout(expiry);
    button.disabled = true;
    button.textContent = 'Checking…';
    button.setAttribute('aria-busy', 'true');
    show('Checking live availability…', 'loading');
    try {
      const response = await fetch(['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)
        ? '/api/availability' : AVAILABILITY_API_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Availability-Key': AVAILABILITY_API_KEY },
        credentials: 'same-origin', body: JSON.stringify(data), signal: active.signal
      });
      const result = (await response.json()).status;
      if (current !== version) return;
      if (!response.ok || !['available', 'unavailable'].includes(result)) throw new Error('Availability');
      show(result === 'available'
        ? '✅ Available'
        : '❌ Unavailable', result);
      expiry = setTimeout(() => show('Availability has expired. Check again for current availability.', 'idle'), 60000);
    } catch {
      if (current === version) show('⚠ Could not verify availability', 'error');
    } finally {
      clearTimeout(timer);
      if (current === version) {
        active = null;
        button.disabled = !selection();
        button.textContent = 'Check Availability';
        button.setAttribute('aria-busy', 'false');
      }
    }
  });
  byId('quoteForm').addEventListener('change', event => {
    if (event.target.matches('#nights, #checkinDate, #bookingType, .line-category, .line-qty')) reset();
  });
  byId('checkinDate').addEventListener('input', reset);
  new MutationObserver(reset).observe(byId('linesContainer'), { childList: true });
  reset();
})();
