define(['marionette', 'underscore'],
    function(Marionette, _) {
        return Marionette.ItemView.extend({
            template: _.template("<a href=#><%=title%></a>"),
            tagName: "li",
            events: {
                "click a": "fireTrigger"
            },
            fireTrigger: function (ev) {
                ev.preventDefault();
                this.model.select();
            }
        });
    });