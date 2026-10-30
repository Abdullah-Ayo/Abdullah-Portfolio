/* ==========================================================================
   LUKMAN ABDULLAH — DATA ANALYST PORTFOLIO INTERACTIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initSlideshows();
  initLightbox();
  initCategoryFilters();
  initBackToTop();
  initCounterAnimation();
});

/* ==========================================================================
   1. MULTI-IMAGE SLIDESHOW COMPONENT
   ========================================================================== */
function initSlideshows() {
  const wrappers = document.querySelectorAll('.slideshow-wrap');

  wrappers.forEach(wrap => {
    const slideshow = wrap.querySelector('.slideshow');
    const prevBtn = wrap.querySelector('.ss-prev');
    const nextBtn = wrap.querySelector('.ss-next');
    const dots = wrap.querySelectorAll('.ss-dots i');
    const images = slideshow.querySelectorAll('img');

    if (!slideshow || images.length <= 1) return;

    let currentIndex = 0;

    function updateDots(index) {
      dots.forEach((dot, idx) => {
        dot.classList.toggle('on', idx === index);
      });
    }

    function scrollToIndex(index) {
      if (index < 0) index = 0;
      if (index >= images.length) index = images.length - 1;
      currentIndex = index;

      const targetImg = images[currentIndex];
      slideshow.scrollTo({
        left: targetImg.offsetLeft,
        behavior: 'smooth'
      });
      updateDots(currentIndex);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrollToIndex(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrollToIndex(currentIndex + 1);
      });
    }

    // Update dots based on scroll position (touch swipe support)
    let scrollTimeout;
    slideshow.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = slideshow.scrollLeft;
        const width = slideshow.offsetWidth;
        const newIndex = Math.round(scrollLeft / width);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < images.length) {
          currentIndex = newIndex;
          updateDots(currentIndex);
        }
      }, 60);
    });
  });
}

/* ==========================================================================
   2. LIGHTBOX HIGH-RES MODAL
   ========================================================================== */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!lightbox) return;

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Dashboard Preview';
    lightboxCaption.textContent = alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Bind to all clickable dashboard preview images
  const clickableImages = document.querySelectorAll('.shot img, .slideshow img');
  clickableImages.forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.src, img.alt);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   3. CATEGORY FILTER TABS
   ========================================================================== */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pieces = document.querySelectorAll('.sheet.piece');
  const countEl = document.getElementById('project-counter');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      pieces.forEach(piece => {
        const categories = (piece.getAttribute('data-category') || '').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
          piece.style.display = '';
          visibleCount++;
        } else {
          piece.style.display = 'none';
        }
      });

      if (countEl) {
        countEl.textContent = `SHOWING ${visibleCount} CASE STUDI${visibleCount === 1 ? 'Y' : 'ES'}`;
      }
    });
  });
}

/* ==========================================================================
   4. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   5. METRIC COUNTER ANIMATION ON SCROLL
   ========================================================================== */
function initCounterAnimation() {
  const metrics = document.querySelectorAll('.metric-num');
  if (!metrics.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = el.getAttribute('data-val');
        if (targetValue) {
          animateValue(el, targetValue);
        }
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  metrics.forEach(m => observer.observe(m));
}

function animateValue(el, targetStr) {
  // Extract number and suffix
  const match = targetStr.match(/([^\d]*)([\d,.]+)(.*)/);
  if (!match) return;

  const prefix = match[1] || '';
  const num = parseFloat(match[2].replace(/,/g, ''));
  const suffix = match[3] || '';

  let start = 0;
  const duration = 1500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOutQuad = 1 - (1 - progress) * (1 - progress);
    const current = Math.floor(start + (num - start) * easeOutQuad);

    el.textContent = `${prefix}${current.toLocaleString()}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = targetStr;
    }
  }

  requestAnimationFrame(update);
}
