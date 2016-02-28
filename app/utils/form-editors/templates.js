define(['jquery', 'underscore', 'backbone', 'backforms',
    'jqueryui'], function ($, _, Backbone, Form, ui) {
    /**
     * Bootstrap 3 templates
     */
    Form.template = _.template('\
    <form class="form-horizontal" role="form" data-fieldsets></form>\
  ');


    Form.Fieldset.template = _.template('\
    <fieldset data-fields>\
      <% if (legend) { %>\
        <legend><%= legend %></legend>\
      <% } %>\
    </fieldset>\
  ');


    Form.Field.template = _.template('\
    <div class="form-group field-<%= key %>">\
      <label class="col-sm-3 control-label" for="<%= editorId %>"><%= title %></label>\
      <div class="col-sm-9">\
        <span data-editor></span>\
          <p class="help-block" data-error></p>\
          <p class="help-block"><%= help %></p>\
      </div>\
    </div>\
  ');


    Form.NestedField.template = _.template('\
    <div class="field-<%= key %>">\
      <div title="<%= title %>" class="input-xlarge">\
        <span data-editor></span>\
        <div class="help-inline" data-error></div>\
      </div>\
      <div class="help-block"><%= help %></div>\
    </div>\
  ');

    Form.editors.Base.prototype.className = 'form-control';
    Form.Field.errorClassName = 'has-error';


    if (Form.editors.List) {

        Form.editors.List.template = _.template('\
      <div class="bbf-list">\
        <ul class="unstyled clearfix" data-items></ul>\
        <button type="button" class="btn bbf-add" data-action="add">Add</button>\
      </div>\
    ');


        Form.editors.List.Item.template = _.template('\
      <li class="clearfix">\
        <div class="pull-left" data-editor></div>\
        <button type="button" class="btn bbf-del" data-action="remove">&times;</button>\
      </li>\
    ');


        Form.editors.List.Object.template = Form.editors.List.NestedModel.template = _.template('\
      <div class="bbf-list-modal"><%= summary %></div>\
    ');

    }

    if (Form.editors.DoubleDropDown) {
        Form.editors.DoubleDropDown.template = _.template('\
  <div>\
  <div class="col-xs-3"><%= rootLabel %><select data-type="root" class="form-control"><%= root %></select></div>\
  <div class="col-xs-2"><%= childLabel %></div><div class="col-xs-3"><select data-type="child" class="form-control"><%= childs %></select></div>\
  </div>\
    ');
    }

  if (Form.editors.Label) {
    Form.editors.Label.fieldTemplate = _.template('\
    <div class="form-group field-<%= key %>">\
      <label class="col-sm-12 " for="<%= editorId %>"><%= title %></label>\
    </div>\
  ');
  }


});
