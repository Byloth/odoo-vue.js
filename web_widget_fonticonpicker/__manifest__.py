# -*- coding: utf-8 -*-
# Copyright 2019 LevelPrime srl <filippo.iovine@levelprime.com>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl.html).
{
    "name": """Web Widget Font Icon Picker""",
    "summary": """Add a form field widget to pick font icons (default fontawesome 4.5).""",
    "category": "web",
    "images": ['static/description/icon.png'],
    "version": "10.0.1",
    "author": "LevelPrime srl",
    "license": "AGPL-3",
    "website": "https://www.levelprime.com",
    "support": "filippo.iovine@levelprime.com",

    "installable": True,
    "application": False,

    "depends": [
        "web"
    ],
    "data": [
        'views/assets.xml'
    ],
    "qweb": [
        'static/src/xml/web_widget_fonticonpicker.xml',
    ]
}
