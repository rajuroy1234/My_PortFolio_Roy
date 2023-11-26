import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../CSS/HOMEPAGE/Homepage.css";
import Form from './Form';
import Menu from './MENU/Menu';
import SnowFlakes from './SnowFlakes';

const Login = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <div className='__homepage'>
      <div className='__NAV'>
        <img className='__hamburger_menu' src='/images/menu.png' />
        <a class="__headername" href="#">ROY'S PORTFOLIO</a>
        <a class="__headername __myWorld" href="#"><img className='__myWorld_image' src='/images/world.png' /></a>
      </div>
      <Menu/>
      <SnowFlakes />
      {/* <Form /> */}
    </div>
  )
}

export default Login



