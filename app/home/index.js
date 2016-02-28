define(['home/controller', 'home/router'],
    function(HomeController, HomeRouter) {
        return function (settings) {
            settings || (settings = {});
            var initialData = settings.initialData || [];
            var module = {};
            module.app = settings.app || {};

            // router
            module.router = new HomeRouter({module: module});

            // controller
            module.controller = new HomeController({module: module});

            module.app.on("notify:user:online", function (user) {
                module.controller.addOnlineUserToDashboard(user);
            });

            module.app.on("notify:user:dashboard", function (data) {
                module.controller.updateDashboardList(data);
            });

            return module;
        };
    });