import React from 'react';
import {Link} from 'react-router-dom';

const logInBtn = () => {
  return (
    <div className="wrap">
      <Link className="btn-login" to='/login'>Login</Link>
      <span className="sep">/</span>
      <Link className="btn-signup" to='/signup'>SignUp</Link>
    </div>
  );
};

export default logInBtn;