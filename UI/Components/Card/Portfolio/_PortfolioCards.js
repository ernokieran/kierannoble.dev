define(["knockout", "utilities", "text!portfolioCardsTemplate"],
    function(ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.pages.portfolioCards;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        self.updateSelectedContent = params.functions.updateSelectedContent;

                        self.setContent = function(component) {
                            self.updateSelectedContent(component);
                        };
        
                    }
                });
            }
        }

        return {
            register: register
        };

    }    
)