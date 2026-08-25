(() => {
  const consentKey = 'mtlabs_analytics_consent';
  const config = window.MTLABS_ANALYTICS || {};
  const banner = document.querySelector('[data-cookie-banner]');
  let analyticsReady = false;

  const allowedParameters = new Set(['destination', 'product', 'document']);

  function sendEvent(name, parameters = {}) {
    if (!analyticsReady || typeof window.gtag !== 'function') return;
    const safeParameters = Object.fromEntries(
      Object.entries(parameters).filter(([key, value]) => allowedParameters.has(key) && typeof value === 'string')
    );
    window.gtag('event', name, safeParameters);
  }

  function startAnalytics() {
    if (analyticsReady || !/^G-[A-Z0-9]+$/i.test(config.measurementId || '')) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', config.measurementId, { anonymize_ip: true });
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.measurementId)}`;
    document.head.appendChild(script);
    analyticsReady = true;
    sendEvent('site_viewed');
  }

  function setConsent(value) {
    localStorage.setItem(consentKey, value);
    banner.hidden = true;
    if (value === 'granted') startAnalytics();
  }

  const savedConsent = localStorage.getItem(consentKey);
  if (savedConsent === 'granted') startAnalytics();
  else if (!savedConsent && banner) banner.hidden = false;

  document.querySelectorAll('[data-consent]').forEach((button) => {
    button.addEventListener('click', () => setConsent(button.dataset.consent));
  });
  document.querySelectorAll('[data-analytics-preferences]').forEach((button) => {
    button.addEventListener('click', () => { if (banner) banner.hidden = false; });
  });
  document.querySelectorAll('[data-track]').forEach((element) => {
    element.addEventListener('click', () => sendEvent(element.dataset.track, {
      destination: element.dataset.destination,
      product: element.dataset.product,
      document: element.dataset.document
    }));
  });

  document.querySelectorAll('[data-year]').forEach((item) => { item.textContent = new Date().getFullYear(); });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
})();
