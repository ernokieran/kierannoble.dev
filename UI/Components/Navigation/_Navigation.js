(function () {
    let name = utilities.componentNames.navigation;

    ko.components.register(name, {

        template: { element: utilities.templateId(name) },

        viewModel: function (params) {
            var self = this;

            self.hasSelectedContent = params.data.hasSelectedContent;
            self.goHome = params.functions.goHome;
        }

    });

}());