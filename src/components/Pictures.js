import Picture from './Picture'
import React, { Component } from 'react'


const Pictures = ({pictures, handleLikes, hanldeFilterCategories, categories, likedPictures, currentUserId}) => {
  
  const renderCategories = () => {
    return categories.map(category => <option key={category.id} value={category.id} name={category.id}>{category.name}</option>)
  }

 

  

  return (

    <div className="browser-default">
      <select onChange={hanldeFilterCategories}>
          <option value="">Picture Categories</option>
          {renderCategories()}
        </select>
    
      <ul>
      {pictures.map(picture => <Picture currentUserId={currentUserId} likedPictures={likedPictures} id={picture.id} handleLikes={handleLikes} category={picture.category_id} key={picture.id} title={picture.title} image={picture.image_url} likes={picture.likes} />)}
      </ul>
    </div>
  )
}

export default Pictures