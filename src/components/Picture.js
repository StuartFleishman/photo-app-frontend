import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Picture = ({title, image, likes, handleLikes, id, likedPictures, currentUserId}) => {

  

  return (
    <div>
      <ul>
      <li><Link to={`/pictures/${id}`}>{title}</Link></li>
      <img src={image} alt={title} height={200} width={200} />
        <p>{likes}</p>
      {/* {likedPictures.find(like => like.picture_id === id && like.user_id === currentUserId) ? <h5>already liked</h5> : */}
        
        <button onClick={() => handleLikes(id)} >Like</button>
      </ul>
    </div>
  )
}

export default Picture