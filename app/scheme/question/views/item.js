define(['underscore', 'marionette', 'backforms',
        'utils/form-editors/label'],
    function (_, Marionette, Forms,
              FormLabel) {
        return Marionette.ItemView.extend({
            tagName: "li",
            className: "list-group-item",
            template: _.template("<%=name%>"),
            events: {
                "click a": "showUserDetail"
            },
            render: function () {
                var that = this,
                    model = that.model,
                    schema = {};

                if (model.get('type') == 'Label'){
                    // Label don't need any elements
                    this.$el.html(model.get("name"));
                    return this;
                }

                schema[model.id] = {
                    type: model.get('type'),
                    title: model.get("name"),
                    options: model.get("options")
                };
                model.schema = schema;
                var form = new Backbone.Form({
                    model: model/*,
                    template: _.template('<div data-fieldsets></div>', null, this.templateSettings)*/
                }).render();
                this.$el.html(form.el);
                return this;
            },
            showUserDetail: function (ev) {
                ev.preventDefault();
                this.model.expand();
            }
        });
    });