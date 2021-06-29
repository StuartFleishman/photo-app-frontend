export default function picturesReducer(state = {pictures: [], loading: false}, action) {
  console.log(action.type)
  switch(action.type) {
    case 'GOT_PICTURES': {
      
      return {...state, pictures: action.payload , loading: false}
    }
    case 'ADD_PICTURE': {
      return {...state, pictures: [...state.pictures, action.payload], loading: false}
    }
    case 'FILTER_PIC_CAT': {
      return [...state, {filterCat: state.filter(picture => picture.id === action.payload)}]
    }
    case 'INCREMENT_LIKE': 
     
      return state.pictures.map(picture => {
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
    case "LOADING": 
     return {...state, loading: true}
    default: 
      return state
  }
}