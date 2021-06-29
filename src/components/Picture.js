import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const Picture = ({title, image, likes, handleLikes, id, likedPictures, currentUserId}) => {

  

  return (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} alt={title} height={200} width={200}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {likes}
    </Card.Text>
    <Button variant="primary" onClick={() => handleLikes(id)}>Like</Button>
  </Card.Body>
</Card>
<br></br>
</>
  )
}

export default Picture