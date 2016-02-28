define(['underscore', 'marionette', 'text!templates/user/layout.html', 'i18n!nls/users'],
    function(_, Marionette, template, i18n) {
        return Marionette.LayoutView.extend({
            templateHelpers: {
                i18n : i18n
            },

            template: _.template(template),
            regions: {
                summary: "#summary",
                detail: "#detail"
            }
        });
    });