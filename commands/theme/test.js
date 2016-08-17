var findRoot = require('find-root');
var utils = require('../../includes/utils.js');

module.exports = {
  command: function() {
    var themeRoot = findRoot(process.cwd());
    utils.runScript(themeRoot, ['test']);
  },
  help: function() {
    utils.logHelpMsg([
      'Usage: slate test',
      '',
      'Test and lint JavaScript, CSS and JSON files in the theme.'
    ]);
  }
};
