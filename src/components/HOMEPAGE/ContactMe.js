import React from 'react'
import "../CSS/HOMEPAGE/ContactMe.css"
import { Fade } from '@mui/material'

const ContactMe = () => {
  return (
    <>
      <div className='__contactMeCard' style={{}}>          
      <Fade in={true}>
        <div class="__contactMeCard_1" style={{ "height" : "33rem", "border-radius" : "5px", "overflow" : "hidden", "transition": "transform 8 ease"}}>
            <h style={{"font-family": "Abril Fatface", "font-size": "3.75rem", "margin": "0", "text-align" : "centre"}}>Contact Me</h>
            <br />
            <div style={{"display" : "flex"}}>
            <ul class="__menu1" style={{"margin-left" : "15vh", "margin-bottom":"10vh"}}>
                <li><a class="__menuItem1" data-title="Location" href="https://maps.app.goo.gl/jkBvMKE2TtSV3re36"><img className='__links' src='/images/location.png' /></a>Noida, UP, India</li>
                <li><a class="__menuItem1" data-title="Phone" href="#"><img className='__links' src='/images/phone.png' /></a>89530-49288</li>
                <li><a class="__menuItem1" data-title="Gmail" href="https://mail.google.com/mail/"><img className='__links' src='/images/gmail.png' /></a>rajuroy258500@gmail.com</li>
                <li><a class="__menuItem1" data-title="Linked In" href="https://linkedin.com/in/raju-roy-b150881a0"><img className='__links' src='/images/linkedin.png' /></a>raju-roy-b150881a0</li>
                <li><a class="__menuItem1" data-title="Github" href="https://github.com/rajuroy1234"><img className='__links' src='/images/github.png' /></a>rajuroy1234</li>
                <li><a class="__menuItem1" data-title="Instagram" href="https://www.instagram.com/r_roy780/"><img className='__links' src='/images/insta.png' /></a>r_roy780</li>
                <li><a class="__menuItem1" data-title="FaceBook" href="https://www.facebook.com/raju.roy258500/"><img className='__links' src='/images/facebook.png' /></a>raju.roy258500</li>
            </ul>
            <img className='__roy1' style={{"margin-left": "-89vh", "max-height": "58vh", "border-radius" : "5px"}} src='/images/roy1.jpg' />
            </div>
        </div>  
        </Fade> 
      </div>
    </>
  )
}

export default ContactMe
