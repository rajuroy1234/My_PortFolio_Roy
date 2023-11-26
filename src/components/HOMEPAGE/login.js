import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../CSS/HOMEPAGE/Homepage.css";
import Form from './Form';
import Menu from './MENU/Menu';
import SnowFlakes from './SnowFlakes';
import Resume from './Resume';
import Projects from './Projects';
import ContactMe from './ContactMe';

const Login = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isHomeActive, setHomeActive] = useState(true);
  const [isFormActive, setFormActive] = useState(false);
  const [isResumeActive, setResumeActive] = useState(false);
  const [isProjectsActive, setProjectsActive] = useState(false);
  const [isContactsActive, setContactsActive] = useState(false);

  const onButtonClick = () => {
     
    fetch("resume.pdf").then((response) => {
        response.blob().then((blob) => {
         
            const fileURL =
              window.URL.createObjectURL(blob);
                 
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Resume_Raju_Roy.pdf";
            alink.click();
        });
    });
};

const onHomeClick = () => {
  setHomeActive(true);
  setResumeActive(false);
  setContactsActive(false);
  setFormActive(false);
  setProjectsActive(false);
}

const onResumeClick = () => {
  setHomeActive(false);
  setResumeActive(true);
  setContactsActive(false);
  setFormActive(false);
  setProjectsActive(false);
}

const onProjectsClick = () => {
  setHomeActive(false);
  setResumeActive(false);
  setContactsActive(false);
  setFormActive(false);
  setProjectsActive(true);
}

const onContactsClick = () => {
  setHomeActive(false);
  setResumeActive(false);
  setContactsActive(true);
  setFormActive(false);
  setProjectsActive(false);
}

const onFormsClick = () => {
  setHomeActive(false);
  setResumeActive(false);
  setContactsActive(false);
  setFormActive(true);
  setProjectsActive(false);
}

  return (
    <div className='__homepage'>
      <div className='__NAV'>
        <img className='__hamburger_menu' src='/images/logo.png' />
        <a class="__headername" href="#" onClick={onHomeClick}><b>ROY'S PORTFOLIO</b></a>
        <a class="__headername __download_Resume" title='Download Resume' href="#"  onClick={onButtonClick}><img className='__myWorld_image' src='/images/download.png' /></a>
        <a class="__headername __myWorld" title='My World' href="#"><img className='__myWorld_image' src='/images/world.png' /></a>
      </div>
      
      <div style={{"display": "flex"}}>
        <div className='__wholeHam'>
          <ul class="__menu">
            <li><a class="__menuItem" data-title="Home" href="#" onClick={onHomeClick}><img className='__menuItem' src='/images/home.png' style={{'transform': isHomeActive ? 'scale(1.4)' : 'scale(1)'}} /></a></li>
            <li><a class="__menuItem" data-title="Resume" href="#" onClick={onResumeClick}><img className='__menuItem' src='/images/resume.png' style={{'transform': isResumeActive ? 'scale(1.4)' : 'scale(1)'}} /></a></li>
            <li><a class="__menuItem" data-title="Projects" href="#" onClick={onProjectsClick}><img className='__menuItem' src='/images/project.png' style={{'transform': isProjectsActive ? 'scale(1.4)' : 'scale(1)'}} /></a></li>
            <li><a class="__menuItem" data-title="Profile" href="#"><img className='__menuItem' src='/images/Roy.png' /></a></li>
            <li><a class="__menuItem" data-title="Contact Me" href="#" onClick={onContactsClick}><img className='__menuItem' src='/images/contact.png' style={{'transform': isContactsActive ? 'scale(1.4)' : 'scale(1)'}}/></a></li>
            <li><a class="__menuItem" data-title="Like" href="#" onClick={onFormsClick}><img className='__menuItem' src='/images/like.png' style={{'transform': isFormActive ? 'scale(1.4)' : 'scale(1)'}}/></a></li>
        </ul>
      </div>
        <SnowFlakes />
        {isFormActive && <Form /> }
        {isResumeActive && <Resume />}
        {isProjectsActive && <Projects />}
        {isContactsActive && <ContactMe />}
      </div>
    </div>
  )
}

export default Login



