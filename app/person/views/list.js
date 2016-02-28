define(['underscore', 'marionette', 'backgrid', 'i18n!nls/persons', 'utils/grid'],
    function (_, Marionette, Backgrid, i18n) {
        return Backgrid.Grid.extend({
            initialize: function (options) {
                var that = this;
                options.columns = [
                    {
                        name: "person_id",
                        label: "Record ID",
                        cell: "integer",
                        editable: false
                    },
                    {
                        name: "fullNameWithTitle",
                        label: "Name",
                        cell: "string",
                        editable: false
                    },
                    {
                        name: "email",
                        label: "Email",
                        cell: "email",
                        editable: false
                    },
                    {
                        name: "group_ref",
                        label: "Group Ref",
                        cell: "string",
                        editable: false
                    },
                    {

                        name: "edit_value",
                        label: "EditValue",
                        editable: false,
                        cell: Backgrid.IconCell.extend({
                            icons: {
                                edit: {
                                    click: that.handleClick,
                                    className: 'edit'
                                },
                                remove: {
                                    click: that.handleRemove,
                                    className: 'remove'
                                }
                            }
                        })
                    }
                ];


                this.constructor.__super__.initialize.apply(this, arguments);
            },

            handleClick: function (ev) {
                ev.preventDefault();
                this.model.select();
            },

            handleRemove: function (ev) {
                ev.preventDefault();
                alert("Delete isn't supported right now!")
            }

        });
    });