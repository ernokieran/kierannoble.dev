define(["knockout", "utilities", "text!introTemplate"],
    function(ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.layout.intro;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;
        
                    }
                });
            }
        }

        return {
            register: register
        };

    }    
)