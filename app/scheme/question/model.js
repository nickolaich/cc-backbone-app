define(['backbone', 'config'],
    function(Backbone, Config) {
        return Backbone.Model.extend({
            idAttribute: "question_id",
            urlRoot: Config.getModelUrl('questions')
            /*,

            expand: function () {
                this.trigger("section:expand", this);
            }*/

        });

    })