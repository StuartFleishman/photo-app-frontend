import Picture from './Picture'


const Pictures = ({pictures}) => {
  return (
    <div>
      <ul>
      {pictures.map(picture => <Picture key={picture.id} title={picture.title} image={picture.image_url} />)}
      </ul>
    </div>
  )
}

export default Pictures