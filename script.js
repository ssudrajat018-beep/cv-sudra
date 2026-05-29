// Smooth scroll for internal links
document.addEventListener('click', function(e){
  const el = e.target.closest('a[href^="#"]');
  if(!el) return;
  const href = el.getAttribute('href');
  if(href === '#') return;
  e.preventDefault();
  const target = document.querySelector(href);
  if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
});

// Simple contact form handler (client-only)
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah tercatat (demo).');
  this.reset();
});
