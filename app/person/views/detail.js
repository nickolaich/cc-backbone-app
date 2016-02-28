define(['underscore', 'marionette', 'moment', 'text!templates/person/detail.html', 'i18n!nls/persons'],
    function (_, Marionette, moment, template, i18n) {
        return Marionette.ItemView.extend({
            templateHelpers: {
                moment: moment,
                i18n: i18n
            },
            template: _.template(template),
            events: {
                "click #nav-user-edit": "showUserEditor"
            },

            showUserEditor: function (ev) {
                ev.preventDefault();
                this.model.edit();
            }
        });
    });