// require the legacy module
var jsdoc = require(module.resolve('../'));
var assert = require('assert');

exports.testBasics = function() {
   var result = jsdoc.parseResource(getResource('../lib/jsdoc.js'));
   assert.equal(result.length, 6);
};

if (require.main == module.id) {
   require('system').exit(require('test').run(module.id));
}