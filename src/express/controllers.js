import { Types } from 'mongoose';
const ObjectId = Types.ObjectId
// import { UsersModel } from '../mongo/models';


const listUsers = () => {
    // return UsersModel.find({})
    return users
}

const getUserById = (id) => {
    // return UsersModel.findOne(user.id)
    return users.find(u => u._id == id);
}

const createUser = (newUser) => {
    // return UsersModel.create(user)
    newUser._id = users[users.length - 1]._id + 1;
    users.push(newUser);
    return users;
}

const removeUser = (id) => {
    // return UsersModel.deleteOne({id: id})
    let newState = [ ...state ]
    const index = newState.findIndex(u => u.id === action.value)
    index > -1 && newState.splice(index, 1)
      return newState
}
// i believe this one is wrong?

const updateUser = (id) => {
    // return UsersModel.update({})
}


export default {
    listUsers,
    createUser,
    removeUser,
    getUserById,
    updateUser
}