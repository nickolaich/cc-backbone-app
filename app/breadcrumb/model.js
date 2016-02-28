define(['backbone'],
    function(Backbone) {
        return Backbone.Model.extend({
            select: function () {
                this.trigger("breadcrumb:selected", this);
            }
        });
    });