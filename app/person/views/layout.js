define(['underscore', 'marionette', 'text!templates/person/layout.html', 'i18n!nls/persons'],
    function(_, Marionette, template, i18n) {
        return Marionette.LayoutView.extend({
            templateHelpers: {
                i18n : i18n
            },

            events : {
                'click button.btn-save' : 'savePerson'
            },

            template: _.template(template),
            regions: {
                detail: "#detail",
                scheme: "#scheme"
            },
            savePerson: function(ev){
                ev.preventDefault();
                this.model.applyChanges(this);
            }
        });
    });