define(['person/collection', 'person/router', 'person/controller'],
    function(PersonCollection, PersonRouter, PersonController) {
        return function (settings) {
            settings || (settings = {});
            var initialData = settings.initialData || [];

            var module = {};
            module.app = settings.app || {};

            // collection
            module.collection = new PersonCollection(initialData, {module: module});

            // router
            module.router = new PersonRouter({module: module});

            // controller
            module.controller = new PersonController({module: module});

            return module;
        };
    });