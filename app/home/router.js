define(['backbone'],
    function(Backbone) {
        return Backbone.Router.extend({
            initialize: function (options) {
                this.module = options.module;
            },
            routes: {
                "": "showIndex"
            },
            showIndex: function () {
                this.module.app.trigger("index:requested");
            }
        });
    });