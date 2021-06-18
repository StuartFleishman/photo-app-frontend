export default function usersReducer(state = { users: []}, action) {
  console.log(action)
  switch(action.type) {
    case 'GOT_USERS': {
      return {...state, users: action.payload}
    }
    case 'ADD_USER': {
      return {...state, users: [...state.users, action.payload]}
    }
    default: 
      return state
  }
}