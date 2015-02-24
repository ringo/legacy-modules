// adds the legacy markdown module to the search path
// this makes it available via require and loads the package descriptor
// which adds the markdown.jar to the class path
require('ringo/engine').addRepository(module.resolve('../../'));

// require the legacy module
var mustache = require('ringo-mustache');
var assert = require('assert');

exports.testBasics = function() {
   assert.equal(
      mustache.to_html('', {}),
      ''
   );
   assert.equal(
      mustache.to_html('foo bar', {}),
      'foo bar'
   );
   assert.equal(
      mustache.to_html('Hello {{upper world}}!', {
         upper: function(str) { return str.toUpperCase() },
         world: 'world'
      }),
      'Hello WORLD!'
   );
};

if (require.main == module.id) {
   require('system').exit(require('test').run(module.id));
}