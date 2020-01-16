import React, { Component } from "react";

class Header extends Component {
  state = {
    contacts: []
  };
  render() {
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">
            <a href="/">Courses</a>
          </h1>
          <nav>
            <a className="signup" href="sign-up">
              Sign Up
            </a>
            <a className="signin" href="sign-in">
              Sign In
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
