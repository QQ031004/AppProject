import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
   state = {
     title: '',
     content: ''  
   }
   handleChange = (e) => {
       this.setState({
       [e.target.id]: e.target.value               //för kunna registrera email
       })
   }
   handleSubmit = (e) => {
       e.preventDefault();                          //för att kunna registrera password
      // console.log(this.state) 
       this.props.createProject(this.state)                                             //console.log(e) det(rad 17) skrev så här i början
   }
      

   render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
              <button className="btn pink lighten-1 zdepth-0">create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}


export default connect(null, mapDispatchToProps)(CreateProject)
