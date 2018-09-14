import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Nav, Main, Login, Signup, Edit } from './components';
import './styles/base.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
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
