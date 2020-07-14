import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {
  constructor() {
    super();

    this.state = {
      customers: []
    }
  }
  
  componentDidMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(projects => this.setState(
        {projects},
        () => console.log('Projects fetched...', projects)
      ));
  }

  render() {
      return(
        <div>
            <h2>Projects</h2>
        </div>
      );
  }
}

export default Projects;
