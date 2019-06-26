import { Types } from 'mongoose';
const ObjectId = Types.ObjectId
import { UsersModel } from '../mongo/models';


const listUsers = () => {
    return UsersModel.find({})
}

const getUserById = (user) => {
    return UsersModel.findOne(user.id)
}

const createUser = (user) => {
    return UsersModel.create(user)
}

const removeUser = (id) => {
    return UsersModel.deleteOne({id: id})
}
// i believe this one is wrong?

// const updateUser = (id) => {
//     return UsersModel.update({})
// }


export default {
    listUsers,
    createUser,
    removeUser,
    getUserById
    // updateUser
}