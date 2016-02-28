define(['backbone'],
    function(Backbone) {
        return Backbone.Router.extend({
            initialize: function (options) {
                this.module = options.module;
            },
            routes: {
                "login": "showLoginForm",
                "logout": "makeLogout"
            },
            showLoginForm: function () {
                this.module.app.trigger("auth:login:show");
            },
            makeLogout:function () {
                this.module.app.trigger("auth:logout");
            }
        });
    });
