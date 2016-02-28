define(['backbone', 'scheme/question/model', 'config'],
    function (Backbone, Question, Config) {
        return Backbone.Collection.extend({
            model: Question,
            url: Config.getModelUrl('scheme/{:id}/questions'),

            updateUrl: function (sectionId) {
                this.url = Config.getModelUrl('scheme/' + sectionId + '/questions');
            },
            initialize: function (data, options) {
                this.module = options.module;

                /*this.on("section:expand", function (md) {
                    this.module.app.trigger("section:expand", md);
                });*/

            }
        });
    });