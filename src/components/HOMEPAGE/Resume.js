import React from 'react'
import "../CSS/HOMEPAGE/Resume.css";
import { Slide } from '@mui/material';

const Resume = () => {
  return (
    <>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <span>
          <img className='__resume' src='/images/resum.png' />
        </span>
      </Slide>
    </>
  )
}

export default Resume
