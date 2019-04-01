import React, { Component } from 'react'

class CreateProject extends Component {
   state = {
     title: '',
     content: ''  
   }
   handleChange = (e) => {
       this.setState({
       [e.target.id]: e.target.value               //för kunna registrera email
       })
//console.log(e) det här har använts i början
   }
   handleSubmit = (e) => {
       e.preventDefault();                          //för att kunna registrera password
       console.log(this.state) 

//console.log(e) det skrev såhär i början
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

export default CreateProject

