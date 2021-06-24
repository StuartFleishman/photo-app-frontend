import React from 'react'

const Picture = ({title, image, likes, handleLikes, id}) => {

  return (
    <div>
      <ul>
      <li>{title}</li>
      <img src={image} alt={title} height={200} width={200} />
        <p>{likes}</p>
      <button onClick={() => handleLikes(id)} >Like</button>
      </ul>
    </div>
  )
}

export default Picture