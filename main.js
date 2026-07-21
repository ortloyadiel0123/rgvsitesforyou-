// ── Active nav link ──
(function () {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

  // Active dot
  document.querySelectorAll('.dot').forEach(dot => {
    if (dot.getAttribute('href') === current) dot.classList.add('active');
  });
})();
