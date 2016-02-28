define(['backbone', 'config'],
    function(Backbone, Config) {
        return Backbone.Model.extend({
            //idAttribute: "user_token_id",
            urlRoot: Config.getModelUrl('users'),

            initialize : function (attr, options) {
                this.module = options.module;
            },

            login: function () {
                this.module.app.trigger("auth:login:do", this);
            },
            logout: function () {
                this.module.app.trigger("auth:logout", this);
            },

            getToken: function(){
                return localStorage.getItem('_token');
            },

            setToken: function(token){
                localStorage.setItem('_token', token);
            }
        });

    })