import Picture from './Picture'


const Pictures = ({pictures}) => {
  return (
    <div>
      <ul>
      {pictures.map(picture => <Picture category={picture.category_id} key={picture.id} title={picture.title} image={picture.image_url} likes={picture.likes} />)}
      </ul>
    </div>
  )
}

export default Pictures