export const addUser = (user) => {
    return {
      type: "ADD_USER",
      value: user
    }
  }
  
  export const removeUser = () => {
    return {
      type: "REMOVE_USER"
    }
  }