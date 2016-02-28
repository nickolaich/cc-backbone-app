define(['backbone', 'scheme/result/model', 'config'],
    function (Backbone, Result, Config) {
        return Backbone.Collection.extend({
            model: Result,
            url: Config.getModelUrl('scheme/88/data/250063'),

            updateUrl: function (schemeId, sectionId, personId) {
                this.url = Config.getModelUrl('scheme/' + schemeId + '/' + sectionId + '/data/' + personId);
            },

            initialize: function (data, options) {
                this.module = options.module;
            }
        });
    });