var assert = require("assert");
var fs = require('../lib/posix-fs');

exports.testIsAbsolute = function () {
    assert.isTrue(fs.isAbsolute(fs.absolute(module.path)));
};

if (require.main === module.id) {
    run(exports);
}
