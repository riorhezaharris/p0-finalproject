var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

function encryptPassword(password) {
  var hash = bcrypt.hashSync(password, salt);
  return hash
}

function comparePassword(loginPass, dbPass) {
  return bcrypt.compareSync(loginPass, dbPass);
}

module.exports = { encryptPassword, comparePassword }