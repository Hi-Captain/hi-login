import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {
  render() {
    return (
      <section className="signup">
        <div className="signup-container">
          <h1>Hi-Login</h1>
          <label htmlFor="input_id">아이디</label>
          <input type="text" id="input_id" name="id" autoFocus/>
          <label htmlFor="input_email">이메일</label>
          <input type="text" id="input_email" name="email"/>
          <label htmlFor="input_pw">비밀번호</label>
          <input type="password" id="input_pw" name="pw"/>
          <label htmlFor="input_pw-re">비밀번호 재확인</label>
          <input type="password" id="input_pw-re" name="pw-re"/>
          <button>회원가입</button>
        </div>
      </section>
    );
  }
}

export default Signup;