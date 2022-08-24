define(["utilsComponentNames", "utilsPreloadAssets"], function(componentNames, preloadAssets) {
    function templateId(name) {
        return "template-" + name;
    }

    function preventBackNavigation(cb = undefined) {
        let global = window;

        if (typeof (global) === "undefined") {
            throw new Error("window is undefined");
        }

        var _hash = "!";
        var preventBack = function () {
            global.location.href += "#";
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

        global.onload = function () {
            preventBack();

            document.body.onkeydown = function (e) {
                var elm = e.target.nodeName.toLowerCase();
                if (e.which === 8 && (elm !== 'input' && elm !== 'textarea')) {
                    e.preventDefault();
                }
                e.stopPropagation();
            };
        }
    };

    return {
        templateId: templateId,
        componentNames: componentNames,
        rootElement: document.getElementById('portfolio'),
        preloadAssets: preloadAssets,
        preventBackNavigation: preventBackNavigation
    }
});