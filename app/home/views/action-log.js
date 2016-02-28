define(['underscore', 'marionette', 'text!templates/home/action-log.html', 'i18n!nls/home', 'home/views/action-log-item'],
    function(_, Marionette, template, i18n, ActionLogItemView) {

        return Marionette.CollectionView.extend({
            templateHelpers: {
                i18n : i18n
            },
            template: _.template(template),
            //tagName: "ul",
            //className: "table table-stripped",
            childView: ActionLogItemView
        });
    });