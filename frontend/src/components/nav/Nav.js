import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink className="btn-home" to='/' exact>Home</NavLink>
        <div className="wrap">
          <NavLink className="btn-login" to='/login'>Login</NavLink>
          <span className="sep">/</span>
          <NavLink className="btn-signup" to='/signup'>SignUp</NavLink>
        </div>
      </nav>
    );
  }
}

export default Nav;