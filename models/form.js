const getConnection = require('../config/mysql.js')
class Form {
  static async create(input) {
    let objForm = {
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message
    }
    const connection = await getConnection()
    const response = await connection.query(
      `INSERT INTO forms (name, email, subject, message) VALUES ('${input.name}', '${input.email}', '${input.subject}', '${input.message}');`
    )
    return true
  }
}

module.exports = Form