define(['underscore', 'marionette', 'text!templates/home/action-log-item.html', 'i18n!nls/home'],
    function(_, Marionette, template, i18n) {

        return Marionette.ItemView.extend({
            templateHelpers: {
                i18n : i18n
            },
            template: _.template(template)
        });
    });