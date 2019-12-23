odoo.define("web_vuejs.VueJsRenderer", function(require)
{
    "use strict";

    const BasicRenderer = require("web.BasicRenderer");

    const VueJsRenderer = BasicRenderer.extend({

        className: "o_vuejs_view",

        /**
         * @override
         */
        init: function(parent, state, params)
        {
            this._super.apply(this, arguments);

            console.debug("Called `init()` method on `VueJsRenderer` object.");
        },
        /**
         * @override
         * @returns {Deferred}
         */
        start: function()
        {
            let result = this._super.apply(this, arguments);

            console.debug("Called `start()` method on `VueJsRenderer` object.");

            return result
        },
    });

    return VueJsRenderer;
});
