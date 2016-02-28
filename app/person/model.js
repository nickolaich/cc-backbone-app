define(['backbone', 'config'],
    function(Backbone, Config) {
        return Backbone.Model.extend({
            idAttribute: "person_id",
            urlRoot: Config.getModelUrl('persons'),
            validate: function (attrs, opts) {
                if (!attrs.email) {
                    return "Need an Email";
                }
            },
            initialize: function () {
                this.on("invalid", function (m) {
                    alert(m.validationError);
                });
            },

            select: function () {
                this.trigger("person:selected", this);
            },

            edit: function () {
                this.trigger("person:editing", this);
            },

            applyChanges: function(){
                this.trigger("person:save", this);
            },

            parse: function (m) {
                m.fullName = m.name + ' (SuperAdmin) ';
                m.fullNameWithTitle = (m.title ? m.title + ' ' : '') + m.name;
                m.edit_value = 'sdsssd';
                return m;
            }
        });

    })