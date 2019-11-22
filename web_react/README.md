Description
-----------

Allow to embed a react application inside odoo.



Usage
-----

Declare the view and set the 'scripts' and 'dom_root' attributes.
Where:
  - scripts: are the javascript resource paths
  - dom_root: is the id you want to give to that application's container


```
    <record id="test_odoo_react_view.react" model="ir.ui.view">
        <field name="name">test_odoo_react_view react</field>
        <field name="model">test_odoo_react_view.test_odoo_react_view</field>
        <field name="arch" type="xml">
            <react scripts="['/test_odoo_react_view/static/lib/pokedex/build/static/js/tmp.js',
                             '/test_odoo_react_view/static/lib/pokedex/build/static/js/2.5c4b5817.chunk.js',
                             '/test_odoo_react_view/static/lib/pokedex/build/static/js/main.1ff76275.chunk.js']"
                   dom_root="root">
            </react>
        </field>
    </record>
```
