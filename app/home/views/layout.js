define(['underscore', 'marionette', 'text!templates/home/layout.html', 'i18n!nls/home'],
    function(_, Marionette, template, i18n) {
        return Marionette.LayoutView.extend({
            templateHelpers: {
                i18n : i18n
            },
            template: _.template(template)
        });
    });