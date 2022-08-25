define(["utilsComponentNames", "utilsPreloadAssets"], function(componentNames, preloadAssets) {
    function preventBackNavigation(cb = undefined) {
        let global = window;

        if (typeof (global) === "undefined") {
            throw new Error("window is undefined");
        }

        var _hash = "!";
        var preventBack = function () {
            global.location.href += "#";

            global.setTimeout(function () {
                global.location.href += "!";
            }, 50);
        };

        global.onhashchange = function () {
            if (global.location.hash !== _hash) {
                global.location.hash = _hash;

                if (typeof (cb) == "function")
                {
                    cb();
                }
            }
        };

        function init() {
            preventBack();

            document.body.onkeydown = function (e) {
                var elm = e.target.nodeName.toLowerCase();
                if (e.which === 8 && (elm !== 'input' && elm !== 'textarea')) {
                    e.preventDefault();
                }
                e.stopPropagation();
            };
        }

        init();
    };

    return {
        componentNames: componentNames,
        rootElement: document.getElementById('portfolio'),
        preloadAssets: preloadAssets,
        preventBackNavigation: preventBackNavigation
    }
});