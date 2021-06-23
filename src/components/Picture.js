import React from 'react'

const Picture = ({title, image, likes}) => {

  return (
    <div>
      <ul>
      <li>{title}</li>
      <img src={image} alt={title} height={200} width={200} />
        <p>{likes}</p>
      <button >Like</button>
      </ul>
    </div>
  )
}

export default Picture