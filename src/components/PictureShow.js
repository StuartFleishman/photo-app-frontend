import React from 'react'
import Card from 'react-bootstrap/Card';


const PictureShow = ({routeData, pictures}) => {
  
  const findPic = () => {
    const id = parseInt(routeData.match.params.id)
    const picture = pictures.find(pic => pic.id === id )
    return !!picture ? 
    <Card className="mx-auto" style={{ width: '18rem' }}>
    <Card.Img variant="top" src={picture.image_url} alt={picture.title} height={200} width={200} />
    <Card.Body>
      <Card.Title>{picture.title}</Card.Title>
    </Card.Body>
    </Card>
    : <div>Please select a category & picture title when creating a picture</div>
  }

 
  
  return (
    
    <div>
      <br></br>
      <br></br>
      <br></br>
      {findPic()}
    </div>
  )
}

export default PictureShow
