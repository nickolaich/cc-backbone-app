define(['underscore', 'marionette', 'text!templates/home/index.html', 'i18n!nls/home'],
    function(_, Marionette, template, i18n) {

        return Marionette.LayoutView.extend({
            templateHelpers: {
                i18n : i18n
            },
            template: _.template(template),

            initialize: function (options) {
                this.module = options.module;
            },
            regions: {
                homeTop: "#home-top",
                actionLog: "#action-log"
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