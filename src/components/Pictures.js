import Picture from './Picture'
import React, { Component } from 'react'
import CardColumns from 'react-bootstrap/CardColumns';
import DropdownButton from 'react-bootstrap/DropdownButton'


const Pictures = ({pictures, handleLikes, hanldeFilterCategories, categories, likedPictures, currentUserId}) => {
  
  const renderCategories = () => {
    return categories.map(category => <option key={category.id} value={category.id} name={category.id}>{category.name}</option>)
  }

 

  

  return (

    <div className="browser-default">
      <br></br>
      <br></br>
      <br></br>
      <select onChange={hanldeFilterCategories}>
          <option value="">Filter Picture Categories</option>
          {renderCategories()}
        </select>
      <br></br>
      <br></br>
      <br></br>
        <CardColumns>
      {pictures.map(picture => <Picture key={picture.id} currentUserId={currentUserId} likedPictures={likedPictures} id={picture.id} handleLikes={handleLikes} category={picture.category_id} key={picture.id} title={picture.title} image={picture.image_url} likes={picture.likes} />)}
      </CardColumns>
      
    </div>
  )
}

export default Pictures