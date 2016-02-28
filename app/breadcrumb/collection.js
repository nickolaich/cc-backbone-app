define(['backbone', 'breadcrumb/model'],
    function(Backbone, BreadCrumb) {
        return Backbone.Collection.extend({
            model: BreadCrumb
        });
    });