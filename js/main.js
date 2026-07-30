(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var header = document.querySelector("[data-header]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-nav]");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var autoplayVideos = Array.from(document.querySelectorAll("[data-autoplay-visible]"));
  if (!reducedMotion && "IntersectionObserver" in window) {
    var videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          var playRequest = video.play();
          if (playRequest && typeof playRequest.catch === "function") {
            playRequest.catch(function () {});
          }
        } else {
          video.pause();
        }
      });
    }, { threshold: [0, 0.45, 0.8] });

    autoplayVideos.forEach(function (video) {
      videoObserver.observe(video);
    });
  }

  var demoButtons = Array.from(document.querySelectorAll("[data-demo-button]"));
  var demoVideo = document.querySelector("[data-demo-video]");
  var demoSource = document.querySelector("[data-demo-source]");
  var demoLabel = document.querySelector("[data-demo-label]");
  var demoTitle = document.querySelector("[data-demo-title]");
  var demoCopy = document.querySelector("[data-demo-copy]");

  demoButtons.forEach(function (button, index) {
    button.id = "demo-tab-" + index;
    button.setAttribute("aria-controls", "demo-stage");

    button.addEventListener("click", function () {
      selectDemo(index, true);
    });

    button.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
      event.preventDefault();
      var nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % demoButtons.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + demoButtons.length) % demoButtons.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = demoButtons.length - 1;
      demoButtons[nextIndex].focus();
      selectDemo(nextIndex, false);
    });
  });

  var demoStage = document.querySelector(".demo-stage");
  if (demoStage) demoStage.id = "demo-stage";

  function selectDemo(index, requestPlayback) {
    var button = demoButtons[index];
    if (!button || !demoVideo || !demoSource) return;

    demoButtons.forEach(function (candidate, candidateIndex) {
      var selected = candidateIndex === index;
      candidate.setAttribute("aria-selected", String(selected));
      candidate.tabIndex = selected ? 0 : -1;
    });

    var nextSource = button.getAttribute("data-video");
    if (demoSource.getAttribute("src") !== nextSource) {
      demoVideo.pause();
      demoSource.setAttribute("src", nextSource);
      demoVideo.setAttribute("poster", button.getAttribute("data-poster") || "");
      demoVideo.load();
    }

    demoStage.setAttribute("aria-labelledby", button.id);
    if (demoLabel) demoLabel.textContent = button.getAttribute("data-label") || "Demo";
    if (demoTitle) demoTitle.textContent = button.getAttribute("data-title") || "Selected demo";
    if (demoCopy) demoCopy.textContent = button.getAttribute("data-copy") || "";

    if (requestPlayback && !reducedMotion) {
      var playRequest = demoVideo.play();
      if (playRequest && typeof playRequest.catch === "function") {
        playRequest.catch(function () {});
      }
    }
  }

  if (demoButtons.length) selectDemo(0, false);

  document.querySelectorAll("[data-tabs]").forEach(function (tabGroup) {
    var buttons = Array.from(tabGroup.querySelectorAll("[data-tab-button]"));
    var panels = Array.from(tabGroup.querySelectorAll("[data-tab-panel]"));

    function selectTab(key, focus) {
      buttons.forEach(function (button) {
        var selected = button.getAttribute("data-tab-button") === key;
        button.setAttribute("aria-selected", String(selected));
        button.tabIndex = selected ? 0 : -1;
        if (selected && focus) button.focus();
      });

      panels.forEach(function (panel) {
        var selected = panel.getAttribute("data-tab-panel") === key;
        panel.hidden = !selected;
        panel.classList.toggle("is-active", selected);
      });
    }

    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        selectTab(button.getAttribute("data-tab-button"), false);
      });

      button.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") return;
        event.preventDefault();
        var nextIndex = index;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % buttons.length;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + buttons.length) % buttons.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = buttons.length - 1;
        selectTab(buttons[nextIndex].getAttribute("data-tab-button"), true);
      });
    });

    if (buttons.length) selectTab(buttons[0].getAttribute("data-tab-button"), false);
  });

  var copyButton = document.querySelector("[data-copy-citation]");
  var citation = document.getElementById("citation");
  if (copyButton && citation) {
    copyButton.addEventListener("click", function () {
      var text = citation.textContent;
      var restoreLabel = function () {
        window.setTimeout(function () {
          copyButton.textContent = "Copy";
        }, 1600);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () {
          copyButton.textContent = "Copied";
          restoreLabel();
        }).catch(function () {
          copyButton.textContent = "Select text";
          restoreLabel();
        });
      } else {
        var range = document.createRange();
        range.selectNodeContents(citation);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        copyButton.textContent = "Selected";
        restoreLabel();
      }
    });
  }

  var navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  var sections = navLinks.map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }
})();
