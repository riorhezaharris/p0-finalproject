const User = require('../models/user')
const { comparePassword } = require('../helpers/bcrypt')

class UserController {
  static async login(req, res) {
    const { email, password } = req.body
    const response = await User.findOne(email)
    if (!response) {
      res.status(400).json({ message: "User not found" })
    }
    if (comparePassword(password, response.password)) {
      req.session.userId = response.id
      res.status(200).json(response)
    } else {
      res.status(400).json({ message: "Invalid user or password" })
    }
  }

  static async register(req, res) {
    try {
      const { email, password } = req.body
      const response = await User.create({
        email: email,
        password: password,
      })
      res.status(201).json(response)
    } catch (err) {
      console.log(err);
    }
  }

  static async logout(req, res) {
    req.session.destroy()
    res.status(200).json({ message: "Successfully log out" })
  }

}

module.exports = UserController