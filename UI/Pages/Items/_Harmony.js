define(["knockout", "utilities", "text!harmonyTemplate"],
    function(ko, utilities, template) {

        const COMPONENT_NAME = utilities.componentNames.harmony;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;
        
                    }
                });
            }

            utilities.preloadAssets.addAsset([
                "/assets/projects/harmony/initial-designs.webp", 
                "/assets/projects/harmony/prototype-ui.webp",
                "/assets/projects/harmony/final-product.webp"
            ]);
        }

        return {
            register: register
        };

    }    
)