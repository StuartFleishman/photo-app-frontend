export default function picturesReducer(state = [], action) {
  console.log(action.type)
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
    case 'INCREMENT_LIKE': 
      return state.map(picture => {
        if(picture.id === action.id) {
          return {
            ...picture, 
            likes: action.payload.likes
          }
        } 
        else {
          return picture
        }
     })
    
    default: 
      return state
  }
}