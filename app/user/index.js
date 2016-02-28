define(['user/collection', 'user/router', 'user/controller'],
    function(UserCollection, UserRouter, UserController) {
        return function (settings) {
            settings || (settings = {});
            var initialData = settings.initialData || [];

            var module = {};
            module.app = settings.app || {};

            // collection
            module.collection = new UserCollection(initialData, {module: module});

            // router
            module.router = new UserRouter({module: module});

            // controller
            module.controller = new UserController({module: module});

            return module;
        };
    });