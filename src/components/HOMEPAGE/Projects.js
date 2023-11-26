import React from 'react'
import "../CSS/HOMEPAGE/Projects.css"
import 'bootstrap/dist/css/bootstrap.css';
import { Zoom } from '@mui/material';

const Projects = () => {
  return (
    <div className='__all_Project_Cards'>          
        <Zoom in={true}>
        <div class="card" style={{"width": "18rem", "overflow" : "hidden"}}>
            <img className='__projects' src='/images/iam.png' />
            <div class="card-body">
            <h4><b>IAM Login</b></h4>
            <br /> <br />
            <p>A New login page for all Denmark++ modules. Primarily implemented on CACHEMASTER</p>
            </div>
        </div>   
        </Zoom>

        <Zoom in={true} style={{ 'transitionDelay': '500ms'}}>
        <div class="card" style={{"width": "18rem", "overflow" : "hidden"}}>
            <img className='__projects' src='/images/grafana.png' />
            <div class="card-body">
            <h4><b>GRAFANA - PROMETHEUS</b></h4>
            <br />
            <p>Implemented these technologies to our codebase to help monitor, collect and store metrics as time-series data, recording information with a timestamp</p>
            </div>
        </div> 
        </Zoom>

        <Zoom in={true} style={{ 'transitionDelay': '1000ms'}}>
        <div class="card" style={{"width": "18rem", "overflow" : "hidden"}}>
            <img className='__projects' src='/images/equilizer.png' />
            <div class="card-body">
            <h4><b>EQUILIZER Plugin</b></h4>
            <br /> <br />
            <p>Able to Eq and boost to make your music sound better</p>
            </div>
        </div>   
        </Zoom>       
    </div>
  )
}

export default Projects
