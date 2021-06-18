const url = "http://127.0.0.1:3001/users"



export const fetchUsers = () => {

  return (dispatch) => { 
    fetch(url)
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
    })
  }


}