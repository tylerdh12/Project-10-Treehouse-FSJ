import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Header extends PureComponent {
  render() {
    const { context } = this.props;
    const authUser = context.authenticatedUser;
    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">
            <a href="/">Courses</a>
          </h1>
          <nav>
            {authUser ? (
              <React.Fragment>
                <span>
                  Welcome, {authUser.firstName} {authUser.lastName}!
                </span>
                <Link to="/sign-out">Sign Out</Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <a className="signup" href="sign-up">
                  Sign Up
                </a>
                <a className="signin" href="sign-in">
                  Sign In
                </a>
              </React.Fragment>
            )}
          </nav>
        </div>
      </div>
    );
  }
}
