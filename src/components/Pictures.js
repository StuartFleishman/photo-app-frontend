import React from 'react'
import Picture from './Picture'
import CardColumns from 'react-bootstrap/CardColumns';



const Pictures = ({pictures, handleLikes, hanldeFilterCategories, categories}) => {
  
 
  const renderCategories = categories.map(category => <option key={category.id} value={category.id} name={category.id}>{category.name}</option>)

  const renderPictures = pictures.map(picture => <Picture key={picture.id} id={picture.id} handleLikes={handleLikes} category={picture.category_id} title={picture.title} image={picture.image_url} likes={picture.likes} />)

  return (

    <div className="browser-default">
      <br></br>
      <br></br>
      <br></br>
        <select onChange={hanldeFilterCategories}>
          <option value="">Filter Picture Categories</option>
          {renderCategories}
        </select>
      <br></br>
      <br></br>
      <br></br>
      <CardColumns>
          {renderPictures}
      </CardColumns>
      
    </div>
  )
}

export default Pictures