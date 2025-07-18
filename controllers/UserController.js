const { User } = require('../models/user')
const { comparePassword } = require('../helpers/bcrypt')

class UserController {
  static login(req, res) {
    const { email, password } = req.body
    User.findOne({
      where: {
        email: email
      }
    })
      .then(data => {
        if (comparePassword(password, data.password)) {
          req.session.userId = data.id
          res.redirect('/')
        } else {
          res.redirect('/login')
        }
      })
      .catch(err => {
        res.send(err)
      })
  }

  static register(req, res) {
    const { username, password, email, birthDate, gender, phoneNumber } = req.body
    User.create({
      username: username,
      password: password,
      email: email,
      birthDate: birthDate,
      gender: gender,
      phoneNumber: phoneNumber,
    })
      .then(data => {
        res.redirect('/login')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static logout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }

}

module.exports = UserController