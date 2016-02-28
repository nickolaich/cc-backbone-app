define(['underscore', 'marionette', 'text!templates/grid/layout.html', 'i18n!nls/persons'],
    function(_, Marionette, template, i18n) {
        return Marionette.LayoutView.extend({
            templateHelpers: {
                i18n : i18n
            },

            template: _.template(template),
            regions: {
                simpleSearch: "#simple-search",
                grid: "#grid",
                paginator: "#paginator"
            }
        });
    });