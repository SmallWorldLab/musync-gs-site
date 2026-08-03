document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.navbar-burger');
  const menu = document.getElementById(burger?.dataset.target || '');

  if (burger && menu) {
    burger.addEventListener('click', () => {
      const active = burger.classList.toggle('is-active');
      menu.classList.toggle('is-active', active);
      burger.setAttribute('aria-expanded', String(active));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        burger.classList.remove('is-active');
        menu.classList.remove('is-active');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (window.bulmaCarousel) {
    window.bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: window.innerWidth < 769 ? 1 : 2,
      loop: true,
      infinite: true,
      autoplay: false,
      navigation: true,
      pagination: true
    });
  }

  const videos = Array.from(document.querySelectorAll('video[autoplay]'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.18 });
    videos.forEach((video) => observer.observe(video));
  }

  const copyButton = document.getElementById('copy-bibtex');
  const bibtex = document.getElementById('bibtex-code');
  if (copyButton && bibtex) {
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(bibtex.textContent.trim());
        const previous = copyButton.textContent;
        copyButton.textContent = 'Copied';
        window.setTimeout(() => { copyButton.textContent = previous; }, 1600);
      } catch (_) {
        window.getSelection()?.selectAllChildren(bibtex);
      }
    });
  }
});
