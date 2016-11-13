
exports.testDirname = require('./dirname');
exports.testExtension = require('./extension');
exports.testIsAbsolute = require('./is-absolute');
exports.testIterator = require('./iterator');
exports.testNormal = require('./normal');
exports.testRelative = require('./relative');
exports.testResolve = require('./resolve');
exports.testTouch = require("./touch");
exports.testOpen = require("./open");

if (require.main === module) {
    require('system').exit(require('test').run(exports));
}