// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {fetchCategories} from '../actions/categoriesAction'
// import Category from '../components/Category'

// class CategoriesContainer extends Component {


//   componentDidMount() {
//     this.props.fetchCategories()
//   }

//   // renderCategories = () => {
//   //   return this.props.categories.map(category => <Category key={category.id} id={category.id} name={category.name} />)
//   // }


//   render() {
//     return (
//       <div>
//         {/* {this.renderCategories()} */}
//       </div>
//     )
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//     categories: state.categories
//   }
// }

// export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer)