define(['backbone', 'config'],
    function(Backbone, Config) {
        return Backbone.Model.extend({
            idAttribute: "item_id",
            urlRoot: Config.getModelUrl('scheme/30/data/65')
        });

    })