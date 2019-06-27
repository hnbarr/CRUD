const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  state: String,
  city: String,
  email: String,
})

module.exports = { Users }