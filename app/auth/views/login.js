define(['underscore', 'marionette', 'auth/model', 'text!templates/auth/login.html', 'i18n!nls/auth'],
    function (_, Marionette, AuthModel, template, i18n) {
        return Marionette.ItemView.extend({
            initialize: function (options) {
                this.module = options.module;
            },
            templateHelpers: {
                i18n: i18n
            },
            template: _.template(template),
            events: {
                "click .btn-login": "loginClicked"
            },

            loginClicked: function (ev) {
                ev.preventDefault();
                var model = this.module.model,
                    form = $(ev.currentTarget).closest('form');
                model.set("email", form.find("input[name=email]").val());
                model.set("password", form.find("input[name=password]").val());
                model.login();
            },
            showError: function(){
                var err = this.$el.find("#login-error").show();
            }
        });
    });