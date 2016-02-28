define(['backbone', 'md5', 'config'],
    function(Backbone, MD5, Config) {
        return Backbone.Model.extend({
            idAttribute: "user_id"
        });

    });