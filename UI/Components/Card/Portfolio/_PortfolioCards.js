(function () {
    let name = utilities.componentNames.portfolioCards;

    ko.components.register(name, {

        template: { element: utilities.templateId(name) },

        viewModel: function (params) {
            var self = this;
            
            self.updateSelectedContent = params.functions.updateSelectedContent;

            self.setContent = function(component) {
                self.updateSelectedContent(component);
            };

        }

    });

}());