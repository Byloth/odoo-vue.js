odoo.define("web_vuejs.VueJsRenderer", function(require)
{
    "use strict";

    const BasicRenderer = require("web.BasicRenderer");

    const VueJsRenderer = BasicRenderer.extend({

        className: "o_vuejs_view",
        indexFilename: null,

        _parseChildren: function(children)
        {
            for (let child of children)
            {
                let childTag = child.tag;

                if (childTag === "path")
                {
                    this.indexFilename = child.attrs.name;
                }
                else
                {
                    throw Error("Invalid child `" + childTag + "` in `vuejs` view.");
                }
            }
        },

        /**
         * @override
         */
        init: function(parent, state, params)
        {
            this._super.apply(this, arguments);
            this._parseChildren(params.arch.children);

            console.debug("Called `init()` method on `VueJsRenderer` object.");
        },
        /**
         * @override
         * @returns {Deferred}
         */
        start: function()
        {
            let result = this._super.apply(this, arguments);
            let iframe = document.createElement("iframe");

            iframe.setAttribute("src", this.indexFilename);
            this.$el.append(iframe);

            console.debug("Called `start()` method on `VueJsRenderer` object.");

            return result;
        },
    });

    return VueJsRenderer;
});
