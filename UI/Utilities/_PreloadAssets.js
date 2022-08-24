define([],
    function() {
        const TIMEOUT = 1000;

        let assetList = [];

        function addAsset(obj) {

            if (typeof (obj) === "undefined")
            {
                return;
            }

            if (typeof (obj) === "string") {
                assetList.push(obj);

                return;
            }

            Array.from(obj).forEach(element => {
                assetList.push(element);
            });

        };

        function init()
        {
            setTimeout(() => {
                if (assetList.length > 0) {
                    let html = "";

                    Array.from(assetList).forEach(element => {
                        html += `<link rel="preload" as="image" href="${element}">`;
                    });

                    document.head.insertAdjacentHTML('beforeend', html);
                }

            }, TIMEOUT);
        }

        return {
            init: init,
            addAsset: addAsset
        };

    }    
)