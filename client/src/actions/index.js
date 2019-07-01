
  export function listUsers() {
    return (dispatch) => {
      fetch("/users")
      .then(res => res.json())
      .then(users => dispatch({
        type: "LIST_USERS",
        value: users
      }));
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
        .then(res => res.json())
        .then(user=> dispatch({
          type: "SHOW_USER",
          value: user
        }))
      };
  }


  // listusers function
  // return (dispatch) => {
  //   fetch(`/users`)
  //     .then(res=> dispatch({
  //       type: "LIST_USERS",
  //       value: res
  //     }))
  //     console.log("list users", users); //undefined
  //   };