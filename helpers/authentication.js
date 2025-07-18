function authentication(req, res, next) {
  if (req.session.userId) {
    next()
  } else {
    res.redirect('/user/login')
  }
}

module.exports = authentication