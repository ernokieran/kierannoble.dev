define(["knockout", "utilities", "text!footerTemplate", "text!version"],
    function(ko, utilities, template, version) {

        const COMPONENT_NAME = utilities.componentNames.footer;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;

                        self.version = ko.observable(version);
        
                        self.hasSelectedContent = params.data.hasSelectedContent;
        
                        self.showSeperator = ko.pureComputed(function () {
                            return !self.hasSelectedContent();
                        });
                    }
                });
            }
        }

        return {
            register: register
        };

    }    
)