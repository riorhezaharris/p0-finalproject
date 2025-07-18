const { encryptPassword } = require('../helpers/bcrypt')
const getConnection = require('../config/mysql.js')

class User {
  static async create(input) {
    const encryptedPassword = encryptPassword(input.password)
    let objUser = {
      email: input.email,
      password: encryptedPassword
    }
    const connection = await getConnection()
    const response = await connection.query(
      `INSERT INTO users (email, password) VALUES ('${input.email}', '${encryptedPassword}');`
    )
    return true
  }

  static async findOne(email) {
    const connection = await getConnection()
    const response = await connection.query(
      `SELECT * FROM users WHERE users.email = '${email}';`
    )
    return response[0][0]
  }
}

module.exports = User