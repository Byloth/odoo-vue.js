odoo.define("web_vuejs.VueJsController", function(require)
{
    "use strict";

    const BasicController = require("web.BasicController");

    const VueJsController = BasicController.extend({

        /**
         * @override
         */
        init: function(parent, model, renderer, params)
        {
            this._super.apply(this, arguments);

            console.debug("Called `init()` method on `VueJsController` object.");
        },

        /**
         * @override
         * @returns {Deferred}
         */
        start: function()
        {
            let result = this._super.apply(this, arguments);

            console.debug("Called `start()` method on `VueJsController` object.");

            return result
        },

        /**
         * @override
         */
        destroy: function()
        {
            this._super.apply(this, arguments);

            console.debug("Called `destroy()` method on `VueJsController` object.");
        },
    });

    return VueJsController;
});
