import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const ratedCard = ({title, image, likes, handleLikes, id, likedPictures, currentUserId, userId, users, categoryId, categories}) => {

//  const renderName = () => {
 
//    const userName = users.find(user => user.id === userId)
//    const name = userName.name
//   return <div>{name}</div>
//  }

//  const renderCategory = () => {
//     debugger
//    const category = categories.find(category => category.id === categoryId)
//    const categoryName = category.name
//  return <div>{categoryName}</div>
//  }

  return (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} alt={title} height={200} width={200}/>
  <Card.Body>
  <Card.Title>{title} - by: -  </Card.Title>
    <Card.Text>
      Likes - {likes}
    </Card.Text>
  </Card.Body>
</Card>
<br></br>
</>
  )
}

export default ratedCard