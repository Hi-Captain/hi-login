import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Edit.scss';
import axios from 'axios';

const mailReg = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-]+/
class Edit extends Component {
  state = {
    email : '',
    password : '',
    passwordRe : ''
  }
  componentDidMount(){
    const { userInfo } = this.props
    if(Boolean(userInfo)){
      this.setState({
        email : userInfo.email,
        password : userInfo.password,
        passwordRe : userInfo.password
      })
    }
  }
  render() {
    const { userInfo, delId } = this.props
    const { email, password, passwordRe } = this.state;
    const pwConfirm = (password === passwordRe),
          emailConfirm = (email.match(mailReg) !== null)
    return (
      <section className="edit">
        {Boolean(!userInfo.userName) ? <h3>로그인이 필요합니다.</h3> :
          <div className="edit-container">
            <h1>회원정보 수정</h1>
            <div className="row">
              <label>아이디 :</label>
              <div className="userId">{userInfo.userName}</div>
            </div>
            <div className="row">
              <label htmlFor="input_email">이메일 : </label>
              <input className={emailConfirm ? "pass" : "fail"} type="text" id="input_email" name="email" value={email} onChange={this._typing}/>
            </div>
            <div className="row">
              <label htmlFor="input_pw">비밀번호 변경 : </label>
              <input className={password !== '' ? "pass" : "fail"} type="password" id="input_pw" name="password" value={password} onChange={this._typing}/>  
            </div>
            <div className="row">
              <label htmlFor="input_pw-re">비밀번호 확인 : </label>
              <input className={ pwConfirm && passwordRe !== '' ? "pass" : "fail" } type="password" id="input_pw-re" name="passwordRe" value={passwordRe} onChange={this._typing}/>  
            </div>
            <div  className="row">
              <button className="del" onClick={delId}>삭제하기</button>
            </div>
            <div className="btns">
              <button onClick={this._goUpdate}>수정하기</button>
              <Link to='/'>취소</Link>
            </div>
          </div>
        }
      </section>
    );
  }

  _typing = (e) => {
    const thisKey = e.target.name
    this.setState({
      [thisKey] : e.target.value
    })
  }

  _goUpdate = () => {
    const userId = this.props.userInfo.userName
    if(document.querySelectorAll('.pass').length === 3){
      axios.patch(`/api/users/${userId}`, this.state).then(res => {
        alert("정상적으로 수정 되었습니다.")
        document.querySelector('.btn-home').click()
      }).catch(e => {
        console.log(e)
      })
    } else {
      alert('양식이 올바르지 않은 항목이 있습니다.\n각 항목들을 한 번 더 확인해주시기 바랍니다.')
    }
  }
}

export default Edit;