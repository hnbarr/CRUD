const mongoose = require('mongoose')
const { Users } = require('./schema')

const UsersModel = mongoose.model('User', Users, 'users')

module.exports = {
  UsersModel
}