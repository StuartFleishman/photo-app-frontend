export default function likedPicturesReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_LIKED_PICTURES': {
      return action.payload
    }
    case 'GOT_LIKED_PICTURES': {
      return action.payload
    }
    default: 
      return state
  }
}