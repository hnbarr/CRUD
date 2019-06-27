const mongoose = require('mongoose')
const { Users } = require('./schema')

const UsersModel = mongoose.model('User', Users)

module.exports = {
  UsersModel
}