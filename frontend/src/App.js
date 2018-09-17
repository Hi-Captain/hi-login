import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Nav, Main, Login, Signup, Edit } from './components';
import './styles/base.scss';

class App extends Component {
  state = {
    userId : '',
    logedIn : false
  }
  render() {
    console.log(this.state)
    const {userId , logedIn} = this.state
    return (
      <BrowserRouter>
        <div className="app">
          <Nav isLogin={logedIn}/>
          <Switch>
            <Route path="/" exact render={() => <Main userId={userId}/>}/>
            <Route path="/login" render={() => <Login goLogin={this._goLogin}/>} />
            <Route path="/signup" component={Signup} />
            <Route path="/:id/edit" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  _goLogin = (userInfo) => {
    axios.post('/api/users/login', userInfo).then(res => {
      console.log(res.data)
      const {error, message} = res.data
      alert(message)
      if(Boolean(error)){
        document.querySelector('[name=pwInfo]').value = ''
        if(error === 'idInfo'){
          document.querySelector('[name=idInfo]').value = ''
        }
      } else {
        this.setState({
          userId : res.data.idInfo,
          logedIn : true
        })
        document.querySelector('.btn-home').click()
      }
    }).catch(e => {
      console.log(e)
    })
  }
  
  _LogOut = () => {
    this.setState({
      userId : '',
      logedIn : false
    })
  }
}

export default App;
