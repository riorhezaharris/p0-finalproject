const router = require('express').Router()
const UserRoute = require('./UserRoute')
const FormRoute = require('../controllers/FormController')

router.post('/form', FormRoute.create)

router.use('/user', UserRoute)

module.exports = router