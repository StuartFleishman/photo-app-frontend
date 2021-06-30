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



  return (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} alt={title} height={200} width={200}/>
  <Card.Body>
  
    <Link to={`/pictures/${id}`}>{title}</Link>
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