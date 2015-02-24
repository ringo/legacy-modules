// adds the legacy markdown module to the search path
// this makes it available via require and loads the package descriptor
// which adds the markdown.jar to the class path
require('ringo/engine').addRepository(module.resolve('../../'));

// require the legacy module
var markdown = require('ringo-markdown');
var assert = require('assert');

exports.testHeadlines = function() {
   assert.equal(markdown.process("# Headline"), '<h1>Headline</h1>\n\n');
   assert.equal(markdown.process("## Headline"), '<h2>Headline</h2>\n\n');
   assert.equal(markdown.process("### Headline"), '<h3>Headline</h3>\n\n');
   assert.equal(markdown.process("#### Headline"), '<h4>Headline</h4>\n\n');
   assert.equal(markdown.process("##### Headline"), '<h5>Headline</h5>\n\n');
   assert.equal(markdown.process("###### Headline"), '<h6>Headline</h6>\n\n');

   assert.equal(markdown.process(
      'This is an H1\n=============\n\nThis is an H2\n-------------'),
      '<h1>This is an H1</h1>\n\n<h2>This is an H2</h2>\n\n'
   );
};

exports.testLists = function() {
   assert.equal(markdown.process(
      '* Red\n* Blue\n* Green'),
      '<ul><li>Red</li>\n<li>Blue</li>\n<li>Green</li></ul>\n\n'
   );
   assert.equal(markdown.process(
         '+ Red\n+ Blue\n+ Green'),
      '<ul><li>Red</li>\n<li>Blue</li>\n<li>Green</li></ul>\n\n'
   );
};

if (require.main == module.id) {
   require('system').exit(require("test").run(module.id));
}