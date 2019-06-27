const mongoose = require('mongoose')
const { Users } = require('./schema')

const UsersModel = mongoose.model('Users', Users)

module.exports = {
  UsersModel
}