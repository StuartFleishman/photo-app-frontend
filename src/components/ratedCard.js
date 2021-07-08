import React from 'react'
import Card from 'react-bootstrap/Card';

const RatedCard = (props) => {

  const renderUser = () => {
    const user = props.users.find(user => user.id === props.userId)
    return !!user ? <div>{user.name}</div> : <div>404</div>
  }

  const renderCategory = () => {
    const category = props.categories.find(category => category.id === props.categoryId)
    return <div>{category.name}</div>
  }


  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
        <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image}  height={200} width={200}/>
        <Card.Body>
          <Card.Text>
            Likes - {props.likes}
          </Card.Text>
          <Card.Text>
          {props.title} <b>by:</b>
          <h1>{renderUser()}</h1>
          </Card.Text>
          <Card.Text>
            category: {renderCategory()}
          </Card.Text>
        </Card.Body>
      </Card>
        <br></br>
    </div>
  )
}

export default RatedCard
