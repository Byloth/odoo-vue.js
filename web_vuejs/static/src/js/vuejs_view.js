odoo.define("web_vuejs.VueJsView", function(require)
{
    "use strict";

    const core = require("web.core");
    const view_registry = require("web.view_registry");

    const BasicView = require("web.BasicView");

    const VueJsController = require("web_vuejs.VueJsController");
    const VueJsRenderer = require("web_vuejs.VueJsRenderer");

    const _lt = core._lt;

    const VueJsView = BasicView.extend({

        config: _.extend({}, BasicView.prototype.config, {

            Controller: VueJsController,
            Renderer: VueJsRenderer
        }),
        display_name: _lt("Vue.js Application"),
        groupable: false,
        icon: "fa-rocket",
        mobile_friendly: true,
        multi_record: true,
        searchable: false,
        viewType: "vuejs",

        /**
         * @override
         */
        init: function(viewInfo, params)
        {
            this._super.apply(this, arguments);

            console.debug("Called `init()` method on `VueJsView` object.");
        }
    });

    view_registry.add("vuejs", VueJsView);

    return VueJsView;
});
