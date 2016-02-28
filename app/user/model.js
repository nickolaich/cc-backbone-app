define(['backbone', 'md5', 'config'],
    function(Backbone, MD5, Config) {
        return Backbone.Model.extend({
            idAttribute: "user_id",
            urlRoot: Config.getModelUrl('users'),
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
                this.trigger("user:selected", this);
            },

            edit: function () {
                this.trigger("user:editing", this);
            },

            parse: function (m) {
                m.fullName = m.name + ' (SuperAdmin) ';
                m.gravatarUrl = function (size) {
                    return "http://www.gravatar.com/avatar/" + hex_md5(m.email) + "?s=" + size;
                };
                m.notes = [
                    {created_at: "2010-10-12T00:00:00", "note": "slsdl l;wds"},
                    {created_at: "2015-11-23T12:45:01", "note": "Comment to user data"}
                ];
                return m;
            }
        });

    })