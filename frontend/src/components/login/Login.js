import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  state = {
    idInfo : '',
    pwInfo : ''
  }
  render() {
    return (
      <section className="login">
        <div className="login-container">
          <h1>Hi-Login</h1>
          <input type="text" name="idInfo" placeholder="아이디 or 이메일" onChange={this._typing} autoFocus/>
          <input type="password" name="pwInfo" onChange={this._typing} placeholder="비밀번호"/>
          <button onClick={this._sendUserInfo}>로그인</button>
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

  _sendUserInfo = () => {
    const { goLogin } = this.props,
          { idInfo, pwInfo } = this.state
    if(idInfo.length === 0){
      alert("아이디를 입력해주세요")
      return
    } else if (pwInfo.length === 0){
      alert("비밀번호를 입력해주세요")
      return
    }
    goLogin(this.state)
  }
}

export default Login;