import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Router from './router';
import './App.css';

class App extends Component {

    state = {
      isLoggedIn: false
    };

    loginCurrentUser = () =>{
      this.setState(() => ({ isLoggedIn: true }));
    }

    logoutCurrentUser = () =>{
      this.setState(() => ({ isLoggedIn: false }));
    }

    toggleLogin = (state) => {
      this.setState(() =>({ isLoggedIn: this.state.isLoggedIn? false : true }));
    }



  render() {
    return (
      <div className="App">
        <Router
          {...this.state}
          loginCurrentUser={this.loginCurrentUser}
          logoutCurrentUser={this.logoutCurrentUser}
          toggleLogin={this.toggleLogin}
        />
      </div>
    );
  }
}

export default App;
