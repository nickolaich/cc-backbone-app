define(['backbone', 'scheme/section/model', 'config'],
    function (Backbone, Section, Config) {
        return Backbone.Collection.extend({
            model: Section,
            url: Config.getModelUrl('scheme/{:id}/sections'),

            updateUrl: function (schemeId) {
                this.url = Config.getModelUrl('scheme/' + schemeId + '/sections');
            },
            initialize: function (data, options) {
                this.module = options.module;

                this.on("section:expand", function (md, item) {
                    this.module.app.trigger("section:expand", md, item);
                });

            }
        });
    });