const { Form } = require('../models/form')

class FormController {
  static create(req, res) {
    const payload = req.body
    Form.create(payload)
  }
}

module.exports = FormController