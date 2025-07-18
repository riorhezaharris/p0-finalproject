const { encryptPassword } = require('../helpers/bcrypt')

class User {
  static create(input) {
    const encryptedPassword = encryptPassword(input.password)
    let objUser = {
      email: input.email,
      password: encryptedPassword
    }
    console.log(objUser);

  }

  static findOne(input) {
    console.log(input);
  }
}

module.exports = User