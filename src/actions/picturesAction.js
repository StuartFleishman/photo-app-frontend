const url = "http://127.0.0.1:3001/pictures"

const setPictures = (pictures) => ({type: "GOT_PICTURES", payload: pictures})

const addPicture = (picture) => ({type: 'ADD_PICTURE', payload: picture})


const handleLikes = (picture, id) => ({type: 'INCREMENT_LIKE', id: id, payload: picture})

export const fetchPictures = () => {
  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(pictures => {
      dispatch(setPictures(pictures))
    })
  }
}

export const createPicture = (picture, history) => {
  return (dispatch) => {
    const configObj = {
      method: 'POST',
      body: picture
    }

    fetch(url, configObj)
    .then(resp => resp.json())
    .then(picture => {
      dispatch(addPicture(picture))
      history.push(`/pictures/${picture.id}`)
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
      const id = picture.id
      dispatch(handleLikes(picture, id))
    })
  }
}
