import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { Main, Login, Signup, Edit } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <nav>
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>SignUp</NavLink>
          </nav>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/:id/edit" component={Edit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
