import React, { Component } from 'react';
import './Signup.scss';
import axios from 'axios';

const mailReg = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/,
      idReg = /^[a-zA-Z]{1}[a-zA-Z0-9]{4,11}$/;

class Signup extends Component {
  state = {
    userName : '',
    email : '',
    password : '',
    passwordRe : ''
  }
  render() {
    const { email, password, passwordRe } = this.state;
    const pwConfirm = (password === passwordRe),
          emailConfirm = (email.match(mailReg) !== null)
    return (
      <section className="signup">
        <div className="signup-container">
          <h1>Hi-Login</h1>
          <label htmlFor="input_id">아이디 <span onClick={this._idConfirm} className="idConfirm">중복확인</span></label>
          <input className="noCheck" type="text" id="input_id" name="userName" onChange={this._typing} autoFocus/>
          <label htmlFor="input_email">이메일</label>
          <input className={emailConfirm ? "pass" : "fail"} type="text" id="input_email" name="email" onChange={this._typing}/>
          <label htmlFor="input_pw">비밀번호</label>
          <input className={password !== '' ? "pass" : "fail"} type="password" id="input_pw" name="password" onChange={this._typing}/>
          <label htmlFor="input_pw-re">비밀번호 재확인</label>
          <input className={ pwConfirm && passwordRe !== '' ? "pass" : "fail" } type="password" id="input_pw-re" name="passwordRe" onChange={this._typing}/>
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
    if(thisKey === 'userName'){
      document.querySelector('#input_id').className = "noCheck"
    }
  }

  _idConfirm = () => {
    const { userName } = this.state
    if(userName.match(idReg) !== null){
      axios.get(`/api/users/${userName}`).then(res => {
        console.log(res.data)
        document.querySelector('#input_id').className = res.data
        if(res.data === 'pass'){
          alert('사용 가능한 아이디 입니다.')
        } else {
          alert('이미 사용중인 아이디 입니다.')
        }
      }).catch(e => {
        console.log(e)
      })
    } else {
      alert('아이디는 영문으로 시작 되어야 하며, \n5~12자로 영문, 숫자로만 이루어 작성해주시기 바랍니다.')
      document.querySelector('#input_id').className = "fail"
    }
  }

  _send = () => {
    if(document.querySelectorAll('.pass').length === 4){
      axios.post('/api/users/signup', this.state).then(res => {
        console.log(res)
      }).catch(e => {
        console.log(e)
      })
    } else if(document.querySelectorAll('.noCheck').length === 1){
      alert("아이디 중복확인을 해주세요.")
    } else {
      alert('양식이 올바르지 않습니다.\n각 항목들을 한 번 더 확인해주시기 바랍니다.')
    }
  }
}

export default Signup;