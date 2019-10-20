.. image:: https://img.shields.io/badge/license-AGPL--3-blue.svg
   :target: http://www.gnu.org/licenses/agpl-3.0-standalone.html
   :alt: License: AGPL-3

========================================
Font Icon Binder widget for Odoo backend
========================================


Features
========

This module binds a field value to a font icon by a ``key`` binder and/or a ``field`` binder.


Usage
=====

Sets view like that if you create ``key`` binder (e.g.: ``key`` = invoice_state)::

    ...
    <field name="arch" type="xml">
        <form>
            ...
            <field name="state" widget="fonticonbinder" options="{'key':'invoice_state'}"/>
            ...
        </form>
    </field>
    ...

Or sets view like that if you create a ``field`` binder (e.g.: ``field`` = account.invoice.state)::

    ...
    <field name="arch" type="xml">
        <form>
            ...
            <field name="state" widget="fonticonbinder"/>
            ...
        </form>
    </field>
    ...
