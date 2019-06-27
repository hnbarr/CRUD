import { Types } from 'mongoose';
import { builtinModules } from 'module';
const ObjectId = Types.ObjectId
import { UsersModel } from '../mongo/models';


const listUsers = () => {
    // return UsersModel.find({})
    return users
}

const getUserById = (id) => {
    return UsersModel.findOne({id: id})
    // return users.find(u => u._id == id);
}

const createUser = (newUser) => {
    // return UsersModel.create(user)
    users.push(newUser);
    return props.users;
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


module.exports =  {
    listUsers,
    createUser,
    removeUser,
    getUserById,
    updateUser
}