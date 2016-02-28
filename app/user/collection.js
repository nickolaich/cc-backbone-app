define(['backbone', 'user/model', 'config'],
    function(Backbone, User, Config) {
        return Backbone.Collection.extend({
            model: User,
            initialize : function (data, options){
                this.module = options.module;

                this.on("user:selected", function(md){
                    this.module.app.trigger("user:selected", md);
                });

                this.on("user:editing", function(md){
                    this.module.app.trigger("user:editing", md);
                });

            },
            url: Config.getModelUrl('users')
        });
    });