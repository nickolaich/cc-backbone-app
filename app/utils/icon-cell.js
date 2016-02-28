define(['jquery', 'underscore', 'backbone', 'backgrid',
    'jqueryui'], function ($, _, Backbone) {

    ;
    (function (Backgrid) {
        var IconCell = Backgrid.IconCell = Backgrid.Cell.extend({

            /** @property */
            className: "icon-cell",

            /**
             @property {string} [title] The title attribute of the generated anchor. It
             uses the display value formatted by the `formatter.fromRaw` by default.
             */
            title: null,

            /**
             * @propery {object} icons list
             */
            icons: {},

            autoAppend: '&nbsp;',

            initialize: function (options) {
                IconCell.__super__.initialize.apply(this, arguments);
                this.title = options.title || this.title;
                this.target = options.target || this.target;
                this.icons = options.icons || this.icons;
                this.autoAppend = options.autoAppend || this.autoAppend;
            },

            // Render icons cell
            render: function () {
                this.$el.empty();
                var icons = this.icons,
                    events = this.events || {};
                for (k in this.icons) {
                    var icon = icons[k],
                        iconUniqueClass = k + '-class-icon-' + this.model.id,
                        iconClass = "glyphicon glyphicon-" + icon.className + " " + iconUniqueClass;
                    var iconEl = $("<span>", {
                        "class": iconClass,
                        "aria-hidden": "true",
                        title: this.title
                    }).html(icon.autoAppend || this.autoAppend || "");
                    if (icon.click){
                        events['click .' + iconUniqueClass]= icon.click;
                    }
                    this.$el.append(iconEl);
                }
                this.delegateEvents(events);
                return this;
            }

        });
    })(Backgrid);


});