define(['breadcrumb/views/item', 'marionette'],
    function(BreadCrumbView, Marionette) {
        return Marionette.CollectionView.extend({
            tagName: "ol",
            className: "breadcrumb",
            childView: BreadCrumbView
        });

    });