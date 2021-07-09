import React from 'react'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


const UserCard = ({title, image, likes, id, deletePicture}) => {

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} alt={title} height={200} width={200}/>
        <Card.Body>
            {title}
          <Card.Text>
            {likes} 
          </Card.Text>
          <Button variant="primary" onClick={() => deletePicture(id)}>Delete</Button>
        </Card.Body>
      </Card>
      <br></br>
</>
  )
}

export default UserCard