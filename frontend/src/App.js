import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Nav, Main, Login, Signup, Edit } from './components';
import './styles/base.scss';

class App extends Component {
  state = {
    userInfo : '',
    logedIn : false
  }
  render() {
    const {userInfo , logedIn} = this.state
    return (
      <BrowserRouter>
        <div className="app">
          <Nav isLogin={logedIn} userId={userInfo.userName} logOut={this._LogOut}/>
          <Switch>
            <Route path="/" exact render={() => <Main userId={userInfo.userName}/>} />
            <Route path="/edit" render={() => <Edit userInfo={userInfo} />} />
            <Route path="/login" render={() => <Login isLogin={logedIn} goLogin={this._goLogin}/>} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  _goLogin = (userInfo) => {
    axios.post('/api/users/login', userInfo).then(res => {
      const {info, error, message} = res.data
      alert(message)
      if(Boolean(error)){
        document.querySelector('[name=pwInfo]').value = ''
        if(error === 'idInfo'){
          document.querySelector('[name=idInfo]').value = ''
        }
      } else {
        this.setState({
          userInfo : info,
          logedIn : true
        })
        document.querySelector('.btn-home').click()
      }
    }).catch(e => {
      console.log(e)
    })
  }
  
  _LogOut = () => {
    const confirm = window.confirm('로그아웃 하시겠습니까?')
    if(confirm){
      alert('로그아웃 되었습니다.')
      this.setState({
        userId : '',
        logedIn : false
      })
      window.location.href = '/'
    }
  }
}

export default App;
