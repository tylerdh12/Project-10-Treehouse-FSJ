import React from "react";
import Form from "./Form";
import Cookies from "js-cookie";
import config from "../../config";

// This component provides the "Create Course" screen by rendering a form that
// allows a user to create a new course. The component also renders a
// "Create Course" button that when clicked sends a POST request to the
// REST API's /api/courses route. This component also renders a "Cancel"
// button that returns the user to the default route (i.e. the list of courses).

export default class CreateCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      userId: "",
      description: "",
      estimatedTime: "",
      materialsNeeded: "",
      errors: []
    };
  }

  componentDidMount() {
    this.setAuth();
  }

  // Sets the authenticated user values into State
  setAuth() {
    const { context } = this.props;
    const authId = context.authenticatedUser.userId;
    this.setState({
      userId: authId,
      emailAddress: context.authenticatedUser.emailAddress,
      firstName: context.authenticatedUser.firstName,
      lastName: context.authenticatedUser.lastName
    });
  }

  // Sets the state of the values entered into the textboxes
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
    fetch(`${config.apiBaseUrl}/courses`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: new Headers({
        Authorization:
          "Basic " +
          btoa(this.state.emailAddress + ":" + Cookies.get("password"))
      })
    })
      .then(async res => {
        if (res.ok === true) {
          this.props.history.push("/");
          console.log("Course Created");
        } else if (res.status === 400 || 500) {
          this.props.history.push("/error");
        }
      })
      .then(function(data) {
        return data.errors;
      })
      // .then(this.props.history.push("/"))
      .catch(err => this.setState({ errors: err }));
  };

  cancel = () => {
    this.props.history.push("/"); // redirect to main page
  };

  render() {
    const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      firstName,
      lastName,
      errors
    } = this.state;

    return (
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
          <ErrorsDisplay errors={this.state.errors} />
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Create Course"
            elements={() => (
              <React.Fragment>
                <div className="grid-66">
                  <div className="course--header">
                    <h4 className="course--label">Course</h4>
                    <div>
                      <input
                        className="input-title course--title--input"
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={this.change}
                        placeholder="Title"
                      />
                      <p>
                        By: {firstName} {lastName}
                      </p>
                    </div>
                  </div>
                  <div className="course--description">
                    <div>
                      <textarea
                        id="description"
                        name="description"
                        type="textarea"
                        value={description}
                        onChange={this.change}
                        placeholder="Course description..."
                      />
                    </div>
                  </div>
                </div>
                <div className="grid-25 grid-right">
                  <div className="course--stats">
                    <ul className="course--stats--list">
                      <li className="course--stats--list--item">
                        <h4>Estimated Time</h4>
                        <div>
                          <input
                            id="estimatedTime"
                            name="estimatedTime"
                            type="text"
                            value={estimatedTime}
                            onChange={this.change}
                            placeholder="Hours"
                          />
                        </div>
                      </li>
                      <li className="course--stats--list--item">
                        <h4>Materials Needed</h4>
                        <div>
                          <textarea
                            id="materials"
                            name="materialsNeeded"
                            type="textarea"
                            value={materialsNeeded}
                            onChange={this.change}
                            placeholder="Materials"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
        </div>
      </div>
    );
  }
}

const ErrorsDisplay = ({ errors = {} }) => {
  if (Object.keys(errors).length <= 0) return null;

  return (
    <div>
      <h2 className="validation--errors--label">Validation errors</h2>
      <div className="validation-errors">
        <ul>
          {Object.values(errors).map(message => (
            <li key={message}>{message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
