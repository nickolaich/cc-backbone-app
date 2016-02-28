define(['jquery', 'underscore', 'backbone', 'backforms',
    'jqueryui'], function ($, _, Backbone) {

    ;
    (function (Form) {

        Form.editors.DoubleDropDown = Form.editors.Base.extend({

            events: {
                'change select': function (ev) {
                    this.change($(ev.currentTarget));
                    this.trigger('change', this);
                },
                'focus select': function () {
                    if (this.hasFocus) return;
                    this.trigger('focus', this);
                },
                'blur select': function () {
                    if (!this.hasFocus) return;
                    var self = this;
                    setTimeout(function () {
                        if (self.$('select:focus')[0]) return;
                        self.trigger('blur', self);
                    }, 0);
                }
            },

            initialize: function (options) {
                options = options || {};
                Form.editors.Base.prototype.initialize.call(this, options);

                //Option defaults
                //this.options = _.extend({}, options);

                //Schema defaults
                //this.schema = _.extend({}, options.schema || {});

                //Template
                this.template = options.template || this.constructor.template;



            },

            render: function () {
                var schema = this.schema,
                    options = schema.options,
                    settings = schema.settings;

                var rootOptions = _.map(options, function (opt) {
                    return '<option value="' + opt.value + '">' + opt.text + '</option>';
                });


                //Render the selects
                var $el = $($.trim(this.template({
                    root: rootOptions.join(''),
                    childs: '',
                    rootLabel: settings.label1,
                    childLabel: settings.label2
                })));

                //Store references to selects
                this.$root = $el.find('[data-type="root"]');
                this.$child = $el.find('[data-type="child"]');
                // Set root value
                this.setValue(this.value);
                // Fill 2nd dropdown
                this.fillChildSelectbox();
                //Call again setValue, it will pre-select 2nd drop
                this.setValue(this.value);

                //Remove the wrapper tag
                this.setElement($el);
                this.$el.attr('id', this.id);
                this.$el.attr('name', this.getName());

                if (this.hasFocus) this.trigger('blur', this);


                return this;
            },

            /**
             */
            getValue: function () {
                var val1 = this.$root.val(),
                    val2 = this.$child.val();
                return [val1, val2];
            },

            /**
             */
            setValue: function (val) {
                if ($.isArray(val) && val.length == 2) {
                    this.$root.val(val[0]);
                    this.$child.val(val[1]);
                }

            },

            focus: function () {
                if (this.hasFocus) return;

                this.$('select').first().focus();
            },

            blur: function () {
                if (!this.hasFocus) return;

                this.$('select:focus').blur();
            },

            // Change handling of selects
            change: function (select) {
                if (select.attr("data-type") === "root") {
                    // change root select box, need to re-fill child
                    this.fillChildSelectbox();
                }
            },

            // Fill child
            fillChildSelectbox: function () {
                var rootValue = this.$root.val();
                var rootEl = _.find(this.schema.options, function (opt) {
                    return opt.value === rootValue;
                });
                if ($.isPlainObject(rootEl)) {
                    var childOptions = _.map(rootEl.childs, function (opt) {
                        return '<option value="' + opt.value + '">' + opt.text + '</option>';
                    });
                    this.$child.html(childOptions.join(''));
                }
            }


        }, {
            //STATICS
            template: _.template('\
    <div>\
      <%= rootLabel %><select data-type="root"><%= root %></select>\
      <%= childLabel %><select data-type="child"><%= childs %></select>\
    </div>\
  ', null, Form.templateSettings)
        });


    })(Backbone.Form);


});
