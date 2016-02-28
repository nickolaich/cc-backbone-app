define(['backbone', 'config'],
    function(Backbone, Config) {
        return Backbone.Model.extend({
            idAttribute: "section_id",
            urlRoot: Config.getModelUrl('sections'),

            expand: function (item) {
                this.trigger("section:expand", this, item);
            }

        });

    })