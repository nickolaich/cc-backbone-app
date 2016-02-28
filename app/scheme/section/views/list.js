define(['underscore', 'marionette', 'scheme/section/views/item', 'i18n!nls/scheme'],
    function (_, Marionette, SectionItemView, i18n) {
        return Marionette.CollectionView.extend({
            tagName: "ul",
            className: "list-group",
            childView: SectionItemView
        });
    });