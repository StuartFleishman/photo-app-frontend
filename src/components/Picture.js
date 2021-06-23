import React from 'react'

const Picture = ({title, image}) => {

  return (
    <div>
      <ul>
      <li>{title}</li>
      <img src={image} alt={title} height={200} width={200} />
      </ul>
    </div>
  )
}

export default Picture