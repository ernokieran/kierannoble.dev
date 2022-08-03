(function() {

    function _setDocumentVh()
    {
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        console.log(vh);
    }

    function _init() {
        _setDocumentVh();

        window.addEventListener('resize', _setDocumentVh);
    }

    _init();
})();