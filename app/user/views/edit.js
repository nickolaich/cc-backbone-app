define(['underscore', 'marionette', 'text!templates/user/edit.html', 'i18n!nls/users'],
    function(_, Marionette, template, i18n) {
        return Marionette.ItemView.extend({
            templateHelpers: {
                i18n : i18n
            },
            template: _.template(template),
            events: {
                "click #saveButton": "saveEdits"
            },
            saveEdits: function (ev) {
                ev.preventDefault();
                var model = this.model;
                this.$el.find("input[name]").each(function () {
                    model.set(this.name, this.value);
                });
                model.save(model.attributes, {
                    success: function (model, response, opts) {
                        alert("User saved");
                    },
                    error: function (model, response, opts) {
                        alert("Error saving");
                        console.log(response, opts);
                    }
                });
            }
        });
    });