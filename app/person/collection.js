define(['backbone', 'pageable', 'person/model', 'config'],
    function(Backbone, PageableCollection, Person, Config) {
        return Backbone.PageableCollection.extend({
            model: Person,
            state: {
                firstPage: 0
            },
            initialize : function (data, options){
                this.module = options.module;

                this.on("person:selected", function(md){
                    this.module.app.trigger("person:selected", md);
                });

                this.on("person:editing", function(md){
                    this.module.app.trigger("person:editing", md);
                });

                this.on("person:save", function(md){
                    this.module.app.trigger("person:save", md);
                });

            },
            url: Config.getModelUrl('persons'),

            // Make search trought collection
            search: function(keywords){
                if (keywords && keywords.length){
                    this.url = Config.getModelUrl('persons/search/' + keywords);
                } else {
                    this.url = Config.getModelUrl('persons');
                }
                this.fetch({reset : true});
            }
        });
    });