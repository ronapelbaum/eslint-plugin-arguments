const requireIndex = require('requireindex');

// import all rules in lib/rules
module.exports.rules = requireIndex(`${__dirname}/lib/rules`);

