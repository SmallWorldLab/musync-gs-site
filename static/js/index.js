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

  const galleryVideos = Array.from(document.querySelectorAll('.js-lazy-video'));
  const hydrateVideo = (video) => {
    if (video.dataset.loaded === 'true') return;
    video.querySelectorAll('source[data-src]').forEach((source) => {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
    });
    video.dataset.loaded = 'true';
    video.preload = 'metadata';
    video.load();
  };

  if ('IntersectionObserver' in window) {
    const loader = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        hydrateVideo(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '420px 0px', threshold: 0.01 });
    galleryVideos.forEach((video) => loader.observe(video));
  } else {
    galleryVideos.forEach(hydrateVideo);
  }

  galleryVideos.forEach((video) => {
    video.addEventListener('pointerenter', () => hydrateVideo(video), { once: true });
    video.addEventListener('focus', () => hydrateVideo(video), { once: true });
    video.addEventListener('play', () => {
      galleryVideos.forEach((other) => {
        if (other !== video) other.pause();
      });
    });
  });

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) return;
    document.querySelectorAll('video').forEach((video) => video.pause());
  });

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
