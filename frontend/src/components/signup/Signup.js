import React, { Component } from 'react';
import './Signup.scss';
import axios from 'axios';

class Signup extends Component {
  state = {
    userName : '',
    email : '',
    password : '',
    passwordRe : ''
  }
  render() {
    return (
      <section className="signup">
        <div className="signup-container">
          <h1>Hi-Login</h1>
          <label htmlFor="input_id">아이디</label>
          <input type="text" id="input_id" name="userName" onChange={this._typing} autoFocus/>
          <label htmlFor="input_email">이메일</label>
          <input type="text" id="input_email" name="email" onChange={this._typing}/>
          <label htmlFor="input_pw">비밀번호</label>
          <input type="password" id="input_pw" name="pw" onChange={this._typing}/>
          <label htmlFor="input_pw-re">비밀번호 재확인</label>
          <input type="password" id="input_pw-re" name="passwordRe" onChange={this._typing}/>
          <button onClick={this._send}>회원가입</button>
        </div>
      </section>
    );
  }
  _typing = (e) => {
    const thisKey = e.target.name
    this.setState({
      [thisKey] : e.target.value
    })
  }

  _send = () => {
    axios.post('/api/users', this.state).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }
}

export default Signup;