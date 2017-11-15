const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
var session = require('express-session')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI)

const app = express()

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000
//   })
// )

require('./routes/authRoutes')(app)
require('./routes/twitterRoutes')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT)
