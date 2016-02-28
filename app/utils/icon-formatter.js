define(['jquery', 'underscore', 'backbone', 'backgrid',
    'jqueryui'], function ($, _, Backbone) {

    ;
    (function (Backgrid) {
        var IconFormatter = Backgrid.IconFormatter = function (options) {
            _.extend(this, this.defaults, options || {});
        };
        IconFormatter.prototype = new IconFormatter();
        _.extend(IconFormatter.prototype, {
            fromRaw: function (rawData, model) {
                console.log(rawData, model);
                return '<a href="javascript:;" >Edit</a>';
            }
        });
    })(Backgrid);


});