import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <section className="login">
        <div className="login-container">
          <h1>Hi-Login</h1>
          <input type="text" name="id" placeholder="아이디 or 이메일" autoFocus/>
          <input type="password" name="pw" placeholder="비밀번호"/>
          <button>로그인</button>
        </div>
      </section>
    );
  }
}

export default Login;