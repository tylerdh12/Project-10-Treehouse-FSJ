import React from "react";
import { Link } from "react-router-dom";

// Displays the top menu bar for the application and includes buttons for
// signing in and signing up (if there's not an authenticated user) or the
// user's first and last name and a button for signing out (if there's an
// authenticated user).

const Header = props => {
  const { context } = props;
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
              <a href="/settings">
                <span>
                  Welcome, {authUser.firstName} {authUser.lastName}!
                </span>
              </a>
              <Link to="/signout">Sign Out</Link>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <a className="signup" href="signup">
                Sign Up
              </a>
              <a className="signin" href="signin">
                Sign In
              </a>
            </React.Fragment>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
