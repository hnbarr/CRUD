const mongoose = require('mongoose')
const { Users } = require('./schemas')

const UsersModel = mongoose.model('Users', Users)

module.exports = {
  UsersModel
}