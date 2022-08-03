var utilities = (function() {

    function templateId(name) {
        return "template-" + name;
    }

    return {
        templateId: templateId,
        rootElement: document.getElementById('portfolio')
    }
})();