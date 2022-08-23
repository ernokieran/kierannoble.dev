(function () {
    let name = utilities.componentNames.footer;

    ko.components.register(name, {

        template: { element: utilities.templateId(name) },

        viewModel: function (params) {
            var self = this;

            self.hasSelectedContent = params.data.hasSelectedContent;

            self.showSeperator = ko.pureComputed(function () {
                return !self.hasSelectedContent();
            });

        }

    });

}());