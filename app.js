const express = require('express')
const session = require('express-session')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routes/index')
const cors = require('cors');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})