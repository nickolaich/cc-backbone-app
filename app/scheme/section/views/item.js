define(['underscore', 'marionette'],
    function(_, Marionette) {
        return Marionette.LayoutView.extend({
            tagName: "li",
            className: "list-group-item",
            template: _.template("<a href=#><%=name%></a><div class='questions'></div>"),
            events: {
                "click a": "showQuestions"
            },
            showQuestions: function (ev) {
                ev.preventDefault();
                this.model.expand(this);
            }
        });
    });