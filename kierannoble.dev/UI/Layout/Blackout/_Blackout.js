"use strict";
(function () {
    const blackout = document.getElementById("blackout");
    const CSS_BLACKOUT_SHOWN = "blackout--shown";

    window.addEventListener("load", function () {
        window.addEventListener("pageshow", function (event) {
            blackout.classList.remove(CSS_BLACKOUT_SHOWN);
        }); 
    });

    window.addEventListener("beforeunload", function (event) {
        if (!(event.target.activeElement.protocol === "mailto:")) {
            blackout.classList.add(CSS_BLACKOUT_SHOWN);
        }
    });
})();