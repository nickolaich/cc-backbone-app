define(['underscore', 'marionette', 'text!templates/scheme/section-layout.html', 'i18n!nls/scheme'],
    function(_, Marionette, template, i18n) {
        return Marionette.LayoutView.extend({
            templateHelpers: {
                i18n : i18n
            },

            template: _.template(template),
            regions: {
                sections: "#sections"
            }
        });
    });