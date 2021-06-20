export default function categoriesReducer(state = [], action) {
  switch(action.type) {
    case 'GOT_CATEGORIES': {
      return action.payload
    }
    default: 
      return state
  }
}