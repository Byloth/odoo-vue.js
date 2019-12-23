from odoo import fields, models

VUEJS_SELECTION = [('vuejs', "Vue.js Application")]


class IrActionsActWindowView(models.Model):
    _inherit = 'ir.actions.act_window.view'

    view_mode = fields.Selection(selection_add=VUEJS_SELECTION)


class IrUiView(models.Model):
    _inherit = 'ir.ui.view'

    type = fields.Selection(selection_add=VUEJS_SELECTION)
