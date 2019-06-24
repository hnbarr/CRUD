const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  firstName: String,
  lastName: String,
  state: String,
  city: String,
  email: String,
})

module.exports = { User }