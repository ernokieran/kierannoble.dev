(function () {
    let name = utilities.componentNames.intro;

    ko.components.register(name, {

        template: { element: utilities.templateId(name) },

        viewModel: function (params) {
            var self = this;
            
        }

    });

}());