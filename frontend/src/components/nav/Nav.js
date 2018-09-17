import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import {Login, LogOut} from './btns'

const Nav = ({isLogin, logOut}) => {
  return (
    <nav>
    <NavLink className="btn-home" to='/' exact>Home</NavLink>
    {isLogin ? <LogOut logOut/> : <Login />}
  </nav>
  );
}

export default Nav;
