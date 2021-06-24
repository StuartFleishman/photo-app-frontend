import Picture from './Picture'



const Pictures = ({pictures, handleLikes, hanldeFilterCategories, categories}) => {
  const renderCategories = () => {
    return categories.map(category => <option key={category.id} value={category.id} name={category.id}>{category.name}</option>)
  }
  return (

    <div>
      <select onChange={hanldeFilterCategories}>
          <option value="">Filter Categories</option>
          {renderCategories()}
        </select>
      <ul>
      {pictures.map(picture => <Picture id={picture.id} handleLikes={handleLikes} category={picture.category_id} key={picture.id} title={picture.title} image={picture.image_url} likes={picture.likes} />)}
      </ul>
    </div>
  )
}

export default Pictures