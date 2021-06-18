export default function categoriesReducer(state = { categories: []}, action) {
  switch(action.type) {
    case 'GOT_CATEGORIES': {
      return {...state, categories: action.payload}
    }
    default: 
      return state
  }
}