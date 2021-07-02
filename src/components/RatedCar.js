import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {fetchUsers} from '../actions/usersAction'
import {fetchCategories} from '../actions/categoriesAction'

class RatedCard extends Component {

  // componentDidMount() {
  //   this.props.fetchUsers()
  //   this.props.fetchCategories()
  // }

  renderUser = () => {
    const user = this.props.users.find(user => user.id === this.props.userId)
  return !!user ? <div>{user.name}</div> : <div>fun</div>
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
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image}  height={200} width={200}/>
        <Card.Body>
          <Card.Text>
            Likes - {this.props.likes}
          </Card.Text>
          <Card.Text>
          {this.props.title} <b>by:</b>
          {this.renderUser()}
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

const mapStateToProps = state => {

 
  return {
    users: state.users,
    categories: state.categories,
    pictures: state.pictures
  }
}

export default connect(mapStateToProps, {fetchUsers, fetchCategories})(RatedCard)
