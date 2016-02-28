define(['underscore', 'marionette'],
    function(_, Marionette) {
        return Marionette.ItemView.extend({
            tagName: "tr",
            template: _.template("<td><%=user_id%></td><td><a href=#><%=name%></a></td><td><a href=#><%=email%></a></td>"),
            events: {
                "click a": "showUserDetail"
            },
            showUserDetail: function (ev) {
                ev.preventDefault();
                this.model.select();
            }
        });
    });