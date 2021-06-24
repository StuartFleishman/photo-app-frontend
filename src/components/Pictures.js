import Picture from './Picture'


const Pictures = ({pictures, handleLikes}) => {
  return (
    <div>
      <ul>
      {pictures.map(picture => <Picture id={picture.id} handleLikes={handleLikes} category={picture.category_id} key={picture.id} title={picture.title} image={picture.image_url} likes={picture.likes} />)}
      </ul>
    </div>
  )
}

export default Pictures