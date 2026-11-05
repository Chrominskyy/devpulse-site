// DevPulse product site. Progressive enhancement only: every page works without JavaScript.
(function () {
  "use strict";
  // Cards / ASCII switch on the hero illustration, mirroring the app's graph presentation control.
  document.querySelectorAll(".console").forEach(function (consoleEl) {
    var buttons = consoleEl.querySelectorAll(".seg button");
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var view = button.getAttribute("data-view");
        consoleEl.setAttribute("data-view", view);
        buttons.forEach(function (other) {
          other.setAttribute("aria-pressed", other === button ? "true" : "false");
        });
      });
    });
  });
})();
