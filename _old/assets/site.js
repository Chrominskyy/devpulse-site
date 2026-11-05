// DevPulse product site. Progressive enhancement only: the page works without JavaScript.
(function () {
  "use strict";

  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length === 0) return;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    return;
  }

  // Only now hide the content, so a failure above leaves the page visible.
  document.documentElement.classList.add("js-reveal");

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

  reveals.forEach(function (el) { observer.observe(el); });
})();
