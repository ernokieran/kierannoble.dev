define(["knockout", "utilities", "text!navigationTemplate"],
    function(ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.navigation;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;
        
                        self.hasSelectedContent = params.data.hasSelectedContent;
                        self.goHome = params.functions.goHome;
                        self.showCV = params.functions.showCV;
                    }
                });
            }
        }

        return {
            register: register
        };

    }    
)