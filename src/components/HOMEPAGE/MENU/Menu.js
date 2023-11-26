import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../CSS/HOMEPAGE/Menu.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = (props) => {
  return (    
    <div className='__wholeHam'>
      <ul class="__menu">
        <li><a class="__menuItem" data-title="Home" href="#"><img className='__menuItem' src='/images/home.png' /></a></li>
        <li><a class="__menuItem" data-title="Like" href="#"><img className='__menuItem' src='/images/like.png' /></a></li>
        <li><a class="__menuItem" data-title="Resume" href="#"><img className='__menuItem' src='/images/resume.png' /></a></li>
        <li><a class="__menuItem" data-title="Projects" href="#"><img className='__menuItem' src='/images/project.png' /></a></li>
        <li><a class="__menuItem" data-title="Profile" href="#"><img className='__menuItem' src='/images/Roy.png' /></a></li>
        <li><a class="__menuItem" data-title="Contact Me" href="#"><img className='__menuItem' src='/images/contact.png' /></a></li>
     </ul>
    </div>
  )
}

export default Menu
