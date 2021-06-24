const url = "http://127.0.0.1:3001/pictures"

const setPictures = (pictures) => ({type: "GOT_PICTURES", payload: pictures})

const addPicture = (picture) => ({type: 'ADD_PICTURE', payload: picture})


const handleLikes = (picture) => ({type: 'INCREMENT_LIKE', payload: picture})

export const fetchPictures = () => {
  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(pictures => {
      dispatch(setPictures(pictures))
    })
  }
}

export const createPicture = (picture) => {
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      body: picture
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(picture => {
      dispatch(addPicture(picture))
    })
  }
}

export const updateLikes = (picture) => {
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


    fetch(`${url}/${picture.id}`, configObj)
    .then(resp => resp.json())
    .then(picture => {
      dispatch(handleLikes(picture))
    })
  }
}
