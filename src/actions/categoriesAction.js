const url = "http://127.0.0.1:3001/categories"

const setCategories = (categories) => ({type: "GOT_CATEGORIES", payload: categories})

export const fetchCategories = () => {

  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(categories => {
      dispatch(setCategories(categories))
    })
  }
}