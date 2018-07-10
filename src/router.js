import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';

class Router extends Component {
  render() {
    const home = (props) => {
      return (
        <Home
          {...props}
          {...this.props}
        />
      );
    };
    const contact = (props) => {
      return (
        <Contact
          {...props}
          {...this.props}
        />
      );
    };
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route exact path='/contact' component={contact}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

class Home extends Component {

  render() {
    return (
      <div>
        <header>This is Home</header>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/contact">Contact page</Link>
          <p>Body baby, this user is: {this.props.isLoggedIn? "Logged In" : "Logged Out"}</p>

            <button onClick={this.props.loginCurrentUser}>Loggin</button>
            <button onClick={this.props.logoutCurrentUser}>Logout</button>
            <button onClick={this.props.toggleLogin}>Toggle</button>
      </div>
    );
  }
}



class Contact extends Component {
  render() {
    return (
      <div>
        <header>This is the contact page</header>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/contact">Contact page</Link>
          <p>Body baby, this user is: {this.props.isLoggedIn? "Logged In" : "Logged Out"}</p>

          <button onClick={this.props.loginCurrentUser}>Loggin</button>
          <button onClick={this.props.logoutCurrentUser}>Logout</button>
          <button onClick={this.props.toggleLogin}>Toggle</button>
      </div>
    );
  }
}
