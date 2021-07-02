import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';



class RatedCard extends Component {



  renderUser = () => {
    const user = this.props.users.find(user => user.id === this.props.userId)
    return !!user ? <div>{user.name}</div> : <div>404</div>
  }

  renderCategory = () => {
    const category = this.props.categories.find(category => category.id === this.props.categoryId)
    return <div>{category.name}</div>
  }
  
  
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image}  height={200} width={200}/>
        <Card.Body>
          <Card.Text>
            Likes - {this.props.likes}
          </Card.Text>
          <Card.Text>
          {this.props.title} <b>by:</b>
          <h1>{this.renderUser()}</h1>
          </Card.Text>
          <Card.Text>
            category: {this.renderCategory()}
          </Card.Text>
        </Card.Body>
      </Card>
        <br></br>
      </div>
    )
  }
}




export default RatedCard
