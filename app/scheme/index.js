define(['scheme/section/collection', 'user/router', 'scheme/controller', 'scheme/result/form-model'],
    function(SectionCollection, UserRouter, SchemeController, FormModel) {
        return function (settings) {
            settings || (settings = {});
            var initialData = settings.initialData || [];

            //var region

            var module = {};
            module.app = settings.app || {};
            // collection
            module.sections = new SectionCollection([], {module: module});
            // router
            //module.router = new UserRouter({module: module});
            // controller
            module.controller = new SchemeController({module: module});

            module.region = settings.region;

            module.dataModel = settings.dataModel || new FormModel();

            module.app.on("section:list:requested", function (schemeId) {
                module.controller.showSections(schemeId);
            });

            module.app.on("section:expand", function (section, item) {
                module.controller.expandSection(section, item);
            });

            return module;
        };
    });