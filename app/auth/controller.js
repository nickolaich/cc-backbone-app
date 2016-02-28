define(['marionette', 'auth/views/login', 'config', 'auth/model'],
    function (Marionette, AuthLoginView, Config, AuthModel) {
        return Marionette.Controller.extend({

            initialize: function (options) {
                this.module = options.module;
            },

            showLoginForm: function () {
                var view = new AuthLoginView({module: this.module});
                this.module.app.content.show(view);
                this.module.app.menu.empty();
                this.module.router.navigate("login");
            },

            loginDo: function (credentials) {
                var postData = credentials.toJSON(),
                    app = this.module.app;
                $.post(Config.getModelUrl('login'), postData)
                    .done(function (response) {
                        //AuthModel.setToken(response.token);
                        localStorage.setItem('_token', response.token);
                        localStorage.setItem('_user', JSON.stringify(response.user));

                        // TODO:: some shit with regions and make reloading
                        //app.refreshLayout();
                        //app.trigger("index:requested");
                        document.location.href = '/';
                    })
                    .fail(function (response) {
                        app.content.currentView.showError();
                    });
            },

            logout: function () {
                var app = this.module.app;
                $.ajax({
                        type: 'DELETE',
                        url: Config.getModelUrl('logout') + '/' + localStorage.getItem('_token')
                    }
                )
                    .done(function (response) {
                        localStorage.removeItem('_token');
                        localStorage.removeItem('_user');
                        app.trigger("auth:login:show");
                    })
                    .fail(function (response) {
                        app.trigger("auth:login:show");
                    });

            }
        });
    });

