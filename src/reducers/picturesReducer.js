export default function picturesReducer(state = [], action) {
  switch(action.type) {
    case 'GOT_PICTURES': {
      return action.payload
    }
    case 'ADD_PICTURE': {
      return [...state, action.payload]
    }
    case 'FILTER_PIC_CAT': {
      return [...state, {filterCat: state.filter(picture => picture.id === action.payload)}]
    }
    default: 
      return state
  }
}