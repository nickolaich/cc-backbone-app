define(['jquery', 'underscore', 'backbone', 'backforms'], function ($, _, Backbone) {

    ;
    (function (Form) {

        /**
         * Label rendering
         *
         */
        Form.editors.Label = Form.editors.Base.extend({


            /**
             * Override Text constructor so type property isn't set (issue #261)
             */
            initialize: function (options) {
                options = options || {};

                Form.editors.Base.prototype.initialize.call(this, options);

                //Option defaults
                this.options = _.extend(
                    {},
                    options);

                //Schema defaults
                this.schema = _.extend(
                    {},
                    options.schema || {});


                this.value = "";

                //Template
                this.template = options.template || this.constructor.template;

            },

            render: function () {
                var schema = this.schema;


                var $el = $($.trim(this.template({
                })));
                // Set current element
                this.setElement($el);
                return this;
            }

        }, {
            //STATICS
            template: _.template('\
    <div>\
    </div>\
  ', null, Form.templateSettings)
        });


    })(Backbone.Form);


});
