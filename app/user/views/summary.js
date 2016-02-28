define(['underscore', 'marionette', 'text!templates/user/summary.html', 'i18n!nls/users'],
    function(_, Marionette, template, i18n) {
        return Marionette.ItemView.extend({
            templateHelpers: {
                i18n : i18n
            },
            template: _.template(template)
        });
    });