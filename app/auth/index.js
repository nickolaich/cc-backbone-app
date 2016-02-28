define(['auth/router', 'auth/controller', 'auth/model'],
    function(AuthRouter, AuthController, AuthModel) {
        return function (settings) {
            settings || (settings = {});
            var initialData = settings.initialData || [];

            var module = {};
            module.app = settings.app || {};

            // Set current user data
            var userData;
            try {
                userData = JSON.parse(localStorage.getItem('_user'));
            } catch(e){
                userData = {};
            }
            module.currentUser = userData;

            // collection
            module.model = new AuthModel({}, {module: module});


            // router
            module.router = new AuthRouter({module: module});

            // controller
            module.controller = new AuthController({module: module});

            module.user = function(){
                return module.currentUser;
            };

            module.token = function(){
                return localStorage.getItem('_token');
            };

            return module;
        };
    });