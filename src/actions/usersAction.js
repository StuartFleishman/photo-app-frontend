const url = "http://127.0.0.1:3001/users"
const sessions = "http://127.0.0.1:3001/sessions"

const setUsers = (users) => ({type: "GOT_USERS", payload: users})

const addUser = (user) => ({type: 'ADD_USER', payload: user})

export const fetchUsers = () => {
  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(users => {
      dispatch(setUsers(users))
    })
  }
}

export const createUser = (user, history) => {
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({user: user})
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: 'AUTH_SUCCESSFUL', payload: {loggedIn: data.logged_in, currentUser: data.user }
      })
      history.push('/')
    })
  }
}

export const login = (user, history) => {
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({user: user})
    }

    fetch("http://127.0.0.1:3001/sessions", configObj)
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: 'AUTH_SUCCESSFUL', payload: {loggedIn: data.logged_in, currentUser: data.user }
      })
      history.push('/')
    })
  }
}


