define(["knockout", "utilities", "text!imageTemplate", "slideshow"],
    function(ko, utilities, template, slideshow) {

        const COMPONENT_NAME = utilities.componentNames.image;

        function register() {
            if (!ko.components.isRegistered(COMPONENT_NAME)) {
                ko.components.register(COMPONENT_NAME, {
                    template: template,
                    viewModel: function (params) {
                        var self = this;
                        
                        self.imageUrl = params.data.imageUrl;
                        self.showAction = params.data.showAction || true;
                        self.shadow = ko.observable(params.data.shadow != undefined ? params.data.shadow : true);
                        self.clickable = ko.observable(params.data.clickable != undefined ? params.data.clickable : true);

                        self.actionClicked = function() {
                            if (ko.unwrap(self.clickable)) {
                                let cb = params.functions.actionClicked || undefined;
                                
                                if (typeof (cb) === "function") {
                                    cb();
                                }
                            }
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