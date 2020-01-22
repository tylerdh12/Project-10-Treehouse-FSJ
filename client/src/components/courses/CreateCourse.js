import React, { Component } from "react";
import Form from "./Form";

// This component provides the "Create Course" screen by rendering a form that
// allows a user to create a new course. The component also renders a
// "Create Course" button that when clicked sends a POST request to the
// REST API's /api/courses route. This component also renders a "Cancel"
// button that returns the user to the default route (i.e. the list of courses).

export default class CreateCourse extends Component {
  state = {
    title: "",
    description: "",
    hours: "",
    materials: "",
    errors: []
  };

  render() {
    const { title, description, hours, materials, errors } = this.state;

    return (
      <div className="bounds course--detail">
        <h1>Create Course</h1>
        <div>
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
                      <p>By User Name</p>
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
                            id="hours"
                            name="hours"
                            type="text"
                            value={hours}
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
                            name="materials"
                            type="textarea"
                            value={materials}
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
    const { context } = this.props;
    const { title, description, hours, materials } = this.state;

    //new user payload
    const course = { title, description, hours, materials };

    context.data
      .createUser(course)
      .then(errors => {
        if (errors.length) {
          this.setState({ errors });
        }
      })
      .catch(err => {
        // handle rejected promises
        console.log(err);
        this.props.history.push("/error"); //push to history stack
      });
  };

  cancel = () => {
    this.props.history.push("/"); // redirect to main page
  };
}
