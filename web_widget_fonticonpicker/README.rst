.. image:: https://img.shields.io/badge/license-AGPL--3-blue.svg
   :target: http://www.gnu.org/licenses/agpl-3.0-standalone.html
   :alt: License: AGPL-3

========================================
Font Icon Picker widget for Odoo backend
========================================


Features
========

This module provides a font icon picker web widget for Odoo backend.


Usage
=====

Declare a char field in your model file::

    ...
    icon = fields.Char(default="fa fa-money")
    ...

And sets its view::

    ...
    <field name="arch" type="xml">
        <form>
            ...
            <field name="icon" widget="fonticonpicker"/>
            ...
        </form>
    </field>
    ...


