const url = "http://127.0.0.1:3001/users"

const addUsers = (users) => ({type: "ADD_USERS", payload: users})

export const fetchUsers = () => {

  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(users => {
      dispatch(addUsers(users))
    })
  }


}