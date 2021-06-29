import React from 'react'
import '../App.css'

const PictureShow = (props) => {
  



  return (
  
    <div>
      <h1>{props.picture.title}</h1>
      <img src={props.picture.image_url} alt={props.picture.title} height={200} width={200} />

    </div>
  )
}

export default PictureShow
