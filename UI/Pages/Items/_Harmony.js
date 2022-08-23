(function () {
    let name = utilities.componentNames.harmony;

    ko.components.register(name, {

        template: { element: utilities.templateId(name) },

        viewModel: function (params) {
            var self = this;
            
        }

    });

}());