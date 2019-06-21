const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Auth = new Schema({
  userName: String,
  password: String,
  bandName: String,
  genre: String,
  leadSinger: String
})

module.exports = { Auth }