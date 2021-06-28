const url = "http://127.0.0.1:3001/liked_pictures"

const addLikedPicture = (ids) => ({type: 'ADD_LIKED_PICTURES', payload: ids})

const setLikedPictures = (pictures) => ({type: "GOT_LIKED_PICTURES", payload: pictures})

const updateLikesPicture = (picture) => ({type: "UPDATE_LIKES", payload: picture})

export const fetchLikedPictures = () => {
  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(likes => {
      
      dispatch(setLikedPictures(likes))
    })
  }
}

export const createLikedPicture = (ids) => {
 
  return (dispatch) => {

    const configObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(ids)
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(data => {
      dispatch(addLikedPicture(data))
    })
  }
}

export const updateLikedPicture = (picture, likedId) => {
  return (dispatch) => {
    const configObj = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(picture)
    }


    fetch(`${url}/${likedId}`, configObj)
    .then(resp => resp.json())
    .then(picture => {
      debugger
      dispatch(updateLikesPicture(picture))
    })
  }
}