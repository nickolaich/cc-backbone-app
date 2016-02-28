define(['underscore', 'marionette', 'text!templates/home/menu.html', 'i18n!nls/home'],
    function(_, Marionette, template, i18n) {

        return Marionette.ItemView.extend({
            templateHelpers: {
                i18n : i18n
            },
            template: _.template(template),

            initialize: function (options) {
                this.module = options.module;
            },

            events: {
                "click #nav-users-index": "showUserList"
            },

            showUserList: function (ev) {
                ev.preventDefault();
                this.module.app.trigger("user:listing:requested");
            }
        });
    });