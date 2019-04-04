import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    console.log(this.props);
    return (
      
      <div className="dashboard container">
       <div className="row">
         <div className="col s12 m6">
         <ProjectList />
         </div>
         <div className="col s12 m5 offset-m1">
         <Notifications />
       </div>
      </div>
    </div>
         
    )
  }
}

const mapStateToprops = (state) => {
  console.log(state);
  return {
    projects: state.project.projects
  }
}

export default compose(
  connect(mapStateToprops),
  firestoreConnect([
    { collection: 'project' }
  ])
)(Dashboard)
