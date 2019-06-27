
  export function listUsers(users) {
    console.log("list users", users);
    return {
      type: "LIST_USERS",
      value: users
    };
  }
  
  export function createUser(user) {
    return {
      type: "CREATE_USER",
      value: user
    };
  }
  
  export function deleteUser(id) {
    return {
      type: "DELETE_USER",
      value: id
    };
  }

  export function showUser(id) {
    return (dispatch) => {
      fetch(`/users/${id}`)
        .then(res=> dispatch({
          type: "SHOW_USER",
          value: res
        }))
      };
  }