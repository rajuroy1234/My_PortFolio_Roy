import React from 'react'
import "../../CSS/HOMEPAGE/Menu.css";

const Menu = () => {
  return (
    <>
      <img className='__hamburger_menu' src='/images/menu.png' />

      <ul class="__menu">
        <li><a class="__menuItem" href="#"><img className='__menuItem' src='/images/home.png' /></a></li>
        <li><a class="__menuItem" href="#"><img className='__menuItem' src='/images/like.png' /></a></li>
        <li><a class="__menuItem" href="#"><img className='__menuItem' src='/images/resume.png' /></a></li>
        <li><a class="__menuItem" href="#"><img className='__menuItem' src='/images/project.png' /></a></li>
        <li><a class="__menuItem" href="#"><img className='__menuItem' src='/images/Roy.png' /></a></li>
        <li><a class="__menuItem" href="#"><img className='__menuItem' src='/images/contact.png' /></a></li>
    </ul>
    </>
  )
}

export default Menu
