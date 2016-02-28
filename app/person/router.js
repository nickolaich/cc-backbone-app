define(['backbone'],
    function(Backbone) {
        return Backbone.Router.extend({
            initialize: function (options) {
                this.module = options.module;
            },
            routes: {
                "persons": "showPersonList",
                "persons/:id": "showPersonDetail",
                "persons/:id/edit": "showPersonEditor"
            },
            showPersonList: function () {
                this.module.app.trigger("person:listing:requested");
            },

            showPersonDetail: function (id) {
                this.fetchAndThen(id, function (person) {
                    person.select();
                });
            },
            showPersonEditor: function (id) {
                this.fetchAndThen(id, function (person) {
                    person.edit();
                });
            },

            fetchAndThen: function (id, next) {
                var self = this;
                self.module.collection.fetch().then(function () {
                    var person = self.module.collection.get(id);
                    next(person);
                });
            }
        });
    });
