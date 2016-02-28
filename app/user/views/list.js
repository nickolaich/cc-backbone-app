define(['underscore', 'marionette', 'user/views/item', 'i18n!nls/users'],
    function (_, Marionette, UserItemView, i18n) {
        return Marionette.CollectionView.extend({
            tagName: "table",
            className: "table table-stripped",
            childView: UserItemView,
            onBeforeRender: function () {
                this.$el.append("<h2>" + i18n.list + "</h2>");
            }
        });
    });