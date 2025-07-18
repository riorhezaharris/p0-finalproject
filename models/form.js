class Form {
  static create(input) {
    let objForm = {
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message
    }
    console.log(objForm);

  }
}

module.exports = Form