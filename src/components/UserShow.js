import React from 'react'
import Picture from './Picture'



const UserShow = (props) => {

  const renderUserPics = () => {
  
    const id = parseInt(props.routeData.match.params.id)
    const userPics = props.pictures.filter(pic => pic.user_id === id)
  
    return userPics.length > 0 ? userPics.map(picture =><Picture id={picture.id} handleLikes={props.handleLikes} likes={picture.likes} image={picture.image_url} title={picture.title} />) : <h1>no pics</h1>
   
  }



  return (
    <div>
      {props.user.name}
      {renderUserPics()}
    </div>
  )
}

export default UserShow
