const mongoose = require('mongoose')
const { Schema } = mongoose

const user = {
  userName : String,
  email : String,
  password : String,
  createdAt: { type: Date, default: Date.now }
}

module.exports = mongoose.model('user', user)