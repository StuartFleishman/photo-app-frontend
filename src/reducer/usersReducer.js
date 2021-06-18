export default function usersReducer(state = { users: []}, action) {
  switch(action.type) {
    case 'GOT_USERS': {
      return {...state, users: action.payload}
    }
    default: 
      return state
  }
}