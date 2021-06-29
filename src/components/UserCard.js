import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router"




const UserCard = ({props, title, image, likes, handleLikes, id, deletePicture, currentUserId}) => {

  const history = useHistory()

  return (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} alt={title} height={200} width={200}/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Link to={`/pictures/${id}`}>{title}</Link>
    <Card.Text>
      {likes} 
    </Card.Text>
    <Button variant="primary" onClick={() => deletePicture(id, history)}>Delete</Button>
  </Card.Body>
</Card>
<br></br>
</>
  )
}

export default UserCard