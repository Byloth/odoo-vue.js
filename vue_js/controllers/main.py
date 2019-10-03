import os

from odoo.http import route, Controller

INDEX_FILE = '../static/src/index.html'


class MainController(Controller):
    @route('/vue.js/', auth='public', type='http')
    def home(self):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        file_name = os.path.realpath(os.path.join(dir_path, INDEX_FILE))

        with open(file_name, 'r') as file:
            html = file.read()

        return html
