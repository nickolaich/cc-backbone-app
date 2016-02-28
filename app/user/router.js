define(['backbone'],
    function(Backbone) {
        return Backbone.Router.extend({
            initialize: function (options) {
                this.module = options.module;
            },
            routes: {
                "users": "showUserList",
                "users/:id": "showUserDetail",
                "users/:id/edit": "showUserEditor"
            },
            showUserList: function () {
                this.module.app.trigger("user:listing:requested");
            },

            showUserDetail: function (id) {
                this.fetchAndThen(id, function (user) {
                    user.select();
                });
            },
            showUserEditor: function (id) {
                this.fetchAndThen(id, function (user) {
                    user.edit();
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
