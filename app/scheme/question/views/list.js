define(['underscore', 'marionette', 'person/model', 'scheme/question/views/item', 'scheme/result/form-model', 'i18n!nls/scheme',
        'stickit', 'utils/form'],
    function (_, Marionette, Person, QuestionItemView, FormModel, i18n, stickit) {
        return Marionette.CollectionView.extend({
            tagName: "ul",
            className: "list-group",
            childView: QuestionItemView,

            initialize: function (options) {
                this.module = options.module;
                this.result = options.result;
            },

            render: function () {
                var that = this,
                    schema = {},
                    bindings = {},
                    dataModel = that.module.dataModel;
                this.collection.each(function (model) {
                    var elName = "q_" + model.id;
                    schema[elName] = {
                        type: model.get('type'),
                        title: model.get("name"),
                        options: model.get("options"),
                        settings: model.get('settings')
                    };

                    if (model.get('type') == 'Label'){
                        schema[elName].template = Backbone.Form.editors.Label.fieldTemplate;
                    } else {
                        // Create bindings
                        if (model.get('type') !== 'DoubleDropDown') {
                            // TODO::Bindings are not working for this elements!!!
                            // Need some special observers for this type of elements of another binding plugin
                            bindings["[name=" + elName + "]"] = {
                                observe: elName/*,
                                // Bindings events
                                 onGet: function(value, options) {console.log("onGet", value, options)},
                                 onSet: function(value, options) {console.log("onSet", value, options)},
                                 update: function($el, val, model, options) { console.log("update", $el, val, model, options); },
                                 updateModel: function(val, event, options) {
                                 // Only update the title attribute if the value starts with "by".
                                 console.log("updateModel", val, event, options);
                                 return true;
                                 }*/
                            };
                        }
                    }

                });

                this.result.each(function (data) {
                    var elName = "q_" + data.get('question_id'),
                        el = schema[elName];
                    if (el) {
                        dataModel.set(elName, data.get('value'));
                    }
                });

                dataModel.schema = schema;
                var form = new Backbone.Form({
                    model: dataModel
                });
                form.render();
                this.$el.html(form.el);
                this.stickit(dataModel, bindings);
                return this;
            }
        });
    });