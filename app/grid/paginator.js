define(['underscore', 'marionette', 'backgrid_paginator'],
    function (_, Marionette, BackgridPaginator) {
        return BackgridPaginator.extend({
            initialize: function (options) {
                this.constructor.__super__.initialize.apply(this, arguments);
            }

        });
    });