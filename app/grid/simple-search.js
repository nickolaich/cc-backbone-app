define(['underscore', 'marionette', 'text!templates/grid/simple-search.html', 'i18n!nls/users'],
    function(_, Marionette, template, i18n) {
        return Marionette.ItemView.extend({
            templateHelpers: {
                i18n : i18n
            },
            template: _.template(template),

            events : {
                'keyup input' : "updateFilter"
            },

            updateFilter: function(ev){
                ev.preventDefault();
                var self = this;
                if(self.timer)
                    clearTimeout(self.timer);
                self.timer = setTimeout(function() {
                    self.collection.search($(ev.currentTarget).val());
                    self.timer = null;
                }, 500);
            }
        });
    });