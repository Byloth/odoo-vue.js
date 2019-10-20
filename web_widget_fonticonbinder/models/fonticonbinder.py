from odoo import models, fields, api


class LPFontIconBinder(models.Model):
    _name = 'lp.fonticonbinder'

    key = fields.Char(help="Key")
    field_id = fields.Many2one('ir.model.fields', string="Field", ondelete='set null',
                               help="Select field to get value to relate to.")
    binding_ids = fields.One2many('lp.fonticonbinding', 'binder_id', string="Bindings list", copy=True)

    size = fields.Selection([
        ('fa-2x', '2x'),
        ('fa-3x', '3x'),
        ('fa-4x', '4x'),
        ('fa-5x', '5x'),
    ], help="Size of the icon.")

    show_content = fields.Boolean(default=False, help="Show content of the field too (according to its type).")

    name = fields.Char(compute='_compute_name', readonly=True)

    @api.depends('field_id', 'key')
    def _compute_name(self):
        for rec in self:
            rec.name = (rec.key or '') + (rec.key and rec.field_id and ' / ' or '') + \
                       (rec.field_id and rec.field_id.display_name or '')

    @staticmethod
    def _build_html(binder, binding, value):
        return binding and ('<span><i class="fa fa-fw %s"></i> %s</span>' % (
            binding.icon + ' ' + (binder.size or ''), binder.show_content and value or '')) or None

    @api.model
    def search_icon_by_key(self, key, value, value_selection):
        binder = self.env['lp.fonticonbinder'].search([('key', '=', key)], limit=1)
        binding = binder and binder.binding_ids.search([('value', '=', value)], limit=1)

        return self._build_html(binder, binding, value_selection or value)

    @api.model
    def search_icon_by_field(self, model, field, value, value_selection):
        field_id = self.env['ir.model.fields'].search(['&',('model', '=', model),('name', '=', field)], limit=1)
        binder = field_id and self.env['lp.fonticonbinder'].search([('field_id', '=', field_id.id)], limit=1)
        binding = binder and binder.binding_ids.search([('value', '=', value)], limit=1)

        return self._build_html(binder, binding, value_selection or value)


class LPFontIconBinding(models.Model):
    _name = 'lp.fonticonbinding'
    _order = 'binder_id, sequence'

    sequence = fields.Integer(string='Sequence', default=0)
    binder_id = fields.Many2one('lp.fonticonbinder', required=True, ondelete='cascade')
    binder_name = fields.Char(related='binder_id.name', readonly=True)

    value = fields.Char(required=True)
    icon = fields.Char()
