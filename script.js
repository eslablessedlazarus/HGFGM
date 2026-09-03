// House of God Fire and Glory Ministry — shared behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Book slider controls
  var slider = document.querySelector('.book-slider');
  var prevBtn = document.querySelector('[data-slide="prev"]');
  var nextBtn = document.querySelector('[data-slide="next"]');
  if (slider && prevBtn && nextBtn) {
    var scrollAmount = 260;
    prevBtn.addEventListener('click', function () {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function () {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // Photo lightbox
  var photoGrid = document.querySelector('.photo-grid');
  var lightbox = document.querySelector('.lightbox');
  if (photoGrid && lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var closeBtn = lightbox.querySelector('.lightbox-close');

    photoGrid.querySelectorAll('img').forEach(function (img) {
      img.addEventListener('click', function () {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('open');
      lightboxImg.src = '';
    }

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Contact form (no backend wired up — placeholder submit handling)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      if (status) {
        status.textContent = 'Thank you — your message has been received. We will be in touch soon.';
      }
      form.reset();
    });
  }
});
