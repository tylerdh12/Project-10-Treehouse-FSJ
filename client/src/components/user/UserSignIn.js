import React from "react";
import Form from "./Form";
import Cookies from "js-cookie";

export default class UserSignIn extends React.Component {
  state = {
    emailAddress: "",
    password: "",
    errors: []
  };

  render() {
    const { emailAddress, password, errors } = this.state;

    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="text"
                  value={emailAddress.toLowerCase()}
                  onChange={this.change}
                  placeholder="Email Address"
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.change}
                  placeholder="Password"
                />
              </React.Fragment>
            )}
          />
          <p>&nbsp;</p>
          <p>
            Don't have a user account? <a href="signup">Click here</a> to sign
            up!
          </p>
        </div>
      </div>
    );
  }

  change = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  };

  submit = () => {
    const { from } = this.props.location.state || {
      from: { pathname: "/" }
    };

    this.props.context.actions
      .signIn(this.state.emailAddress, this.state.password)
      .then(user => {
        if (user === null) {
          this.setState(() => {
            return { errors: ["Sign-in was unsuccessful"] };
          });
        } else {
          user.password = this.state.password;
          // Sets the User Obj as a cookie to recall for state and sets an expiration of: 1 Day
          // (use https://github.com/js-cookie/js-cookie/wiki/Frequently-Asked-Questions as ref for cookie expire )
          Cookies.set("authenticatedUser", JSON.stringify(user), {
            expires: 1
          });

          this.props.history.push(from);
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/error");
      });
  };

  cancel = () => {
    this.props.history.push("/"); // redirect to main page
  };
}
