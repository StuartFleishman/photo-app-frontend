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

     case "DELETED_PIC": 
      
        const newPic = state.filter(pic => pic.id !== action.payload)
        return newPic
    
    default: 
      return state
  }
}