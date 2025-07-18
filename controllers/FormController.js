const Form = require('../models/form.js')
class FormController {
  static async create(req, res) {
    try {
      const payload = req.body
      const response = await Form.create(payload)
      res.status(201).json(response)
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = FormController