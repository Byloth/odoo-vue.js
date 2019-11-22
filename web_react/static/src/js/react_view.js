odoo.define('web_react.react_view', function(require) {
    'use strict'

    function RequestQueue() {
        this.def = $.Deferred().resolve();
    }

    RequestQueue.prototype.exec = function (url) {
        let current = this.def,
            next = this.def = $.Deferred()

        return current.then(function() {
            return $.when($.getScript(url)).always(function(code, state, jqXHR) {
                if(state != 'success') {
                    console.error(`ERROR LOADING SCRIPT: ${url}`)
                    console.error(`Error: ${jqXHR}`)
                    next.reject()
                }

                eval(code)
                next.resolve()
            });
        });
    };

    const core = require('web.core'),
          FormView = require('web.FormView'),

          ReactView = FormView.extend({
              init() {
                  this._super.apply(this, arguments)
                  const arch = this.fields_view.arch

                  if( !('scripts' in arch.attrs) || !('dom_root' in arch.attrs)) {
                      console.error(`You need to define "scripts" and "dom_root" attributes on the view tag.`)
                      this.destroy()
                  }

                  // Get scripts from the view's root node
                  this.scripts = eval(arch.attrs.scripts)

                  // Get the dom root node id
                  this.dom_root = arch.attrs.dom_root
              },
              start() {
                  this._super.apply(this, arguments)

                  // Add app root element
                  this.$el.append(`<div id="${this.dom_root}"></div>`)

                  // Load app scripts
                  let queue = new RequestQueue()
                  _.each(this.scripts, (url) => {
                      queue.exec(url)
                  })
              },
              destroy() {
                  if(this.dom_root) {
                      let rootElement =  this.$el.find(`#${this.dom_root}`)
                      if(rootElement.length &&
                         '_reactRootContainer' in rootElement.get(0) &&
                         'unmount' in rootElement.get(0)._reactRootContainer)
                          rootElement.get(0)._reactRootContainer.unmount()
                      else
                          rootElement.remove()

                  }
                  this._super.apply(this, arguments)
                  return $.when()
              }
          })

    core.view_registry.add('react', ReactView)

})
