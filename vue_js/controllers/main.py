from odoo.http import Controller, request, route


class MainController(Controller):
    @route('/vue-js', auth='public', type='http')
    def home(self):
        return request.render('vue_js.frontend_layout')
