define(["utilsComponentNames", "utilsPreloadAssets"], 
    function(componentNames, preloadAssets) {
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

        function length(obj) {
            return obj ? obj.length : 0;
        };

        function hasLength(obj) {
            return length(obj) > 0;
        };

        function trim(value, charsToTrim) {
            if (!value) {
                return value;
            }
    
            value = value.trim();
    
            if (!charsToTrim) {
                return value;
            }
    
            let charsToRemoveLength = charsToTrim.length,
                startPosition = 0,
                endPosition = value.length;
    
            while (startPosition < value.length && _getNextChars(startPosition) === charsToTrim) {
                startPosition++;
            }
    
            while (endPosition > 0 && _getNextChars(endPosition - charsToRemoveLength) === charsToTrim) {
                endPosition--;
            }
    
            return value.substring(startPosition, endPosition);
    
            function _getNextChars(startIndex) {
                return value.substring(startIndex, startIndex + charsToRemoveLength);
            }
        }

        return {
            componentNames: componentNames,
            hasLength: hasLength,
            rootElement: document.getElementById('portfolio'),
            preloadAssets: preloadAssets,
            preventBackNavigation: preventBackNavigation,
            trim: trim
        }
    }
);