const jQuery = require("jquery");
window.$ = jQuery;

require("jquery-bbq");

const underscore = require("underscore");
window._ = underscore;

require("./boot.js");
const odoo = window.odoo;

export default odoo;
