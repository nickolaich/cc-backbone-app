define(['backbone'],
    function(Backbone) {
        return Backbone.Router.extend({
            initialize: function (options) {
                this.module = options.module;
            },
            routes: {
                "scheme/:scheme_id/sections": "showSchemeSection",
                "scheme/:section_id/questions": "showSectionQuestions"
            },
            showSchemeSection: function () {
                this.module.app.trigger("user:listing:requested");
            },

            showSectionQuestions: function (id) {
                this.fetchAndThen(id, function (user) {
                    user.select();
                });
            },

            fetchAndThen: function (id, next) {
                var self = this;
                self.module.collection.fetch().then(function () {
                    var user = self.module.collection.get(id);
                    next(user);
                });
            }
        });
    });
