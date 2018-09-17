import React from 'react';
import { Link } from 'react-router-dom';

const logOutBtn = () => {
  return (
    <div className="wrap">
      <Link className="btn-login" to='/edit'>Edit</Link>
      <span className="sep">/</span>
      <a>LogOut</a>
    </div>
  );
};

export default logOutBtn;