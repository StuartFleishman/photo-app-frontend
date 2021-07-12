export default function usersReducer(state = [], action) {
  
  switch(action.type) {
    case 'GOT_USERS': {
      return action.payload
    }
    default: 
      return state
  }
}

