odoo.define('web.web_widget_fonticonbinder', function(require) {
"use strict";

var core = require('web.core');
var common = require('web.form_common');
var ListView = require('web.ListView');
var Model = require('web.DataModel');
var QWeb = core.qweb;

var ColumnFontIconBinder = ListView.Column.extend({
    _format: function (row_data, options) {
        let self = this;
        let value = row_data[this.id].value;

        // INFO: in case we have to handle a Selection field value to show.
        let value_selection = (this.type === 'selection') &&
            _.find(this.selection, function (el) {
                return el[0] === value;
            });
        value_selection = value_selection && value_selection[1];

        let nid = options.model.replace('.', '_') + '_' + this.name + options.id;
        return QWeb.render('FontIconBinder.cell', {
            'id': nid,
            '_render_cell': function() {
                new Model('lp.fonticonbinder').call('search_icon_by_field', {
                    model: options.model,
                    field: self.name,
                    value: value,
                    value_selection: value_selection
                }).then(function(result) {
                    $('#' + nid).html(result);
                });
            },
        });
    }
});

var FontIconBinder = common.AbstractField.extend(common.ReinitializeFieldMixin, {
    start: function() {
        this._super();
    },
    render_value: function () {
        let self = this;
        let value = this.get('value');

        // INFO: in case we have to handle a Selection field value to show.
        let value_selection = (this.field.type === 'selection') &&
            _.find(this.field.selection, function (el) {
                return el[0] === value;
            });
        value_selection = value_selection && value_selection[1];

        // INFO: priority is looking for the key.
        if (this.options.key)
            new Model('lp.fonticonbinder').call("search_icon_by_key", {
                    key: this.options.key, value: value, value_selection: value_selection})
                .then(function (result) {
                    self.$el.text(result);
                });
        else
            // INFO: then look for the field.
            new Model('lp.fonticonbinder').call("search_icon_by_field", {
                    model: this.field_manager.model, field: this.name, value: value, value_selection: value_selection})
                .then(function (result) {
                    self.$el.html(result);
                });
    },
});

core.form_widget_registry.add('fonticonbinder', FontIconBinder);

core.list_widget_registry.add('field.fonticonbinder', ColumnFontIconBinder);

return {
    FontIconBinder: FontIconBinder
};
});
