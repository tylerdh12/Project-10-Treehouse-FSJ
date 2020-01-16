import React, { Component } from "react";
import Form from "./Form";

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
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={title}
                  onChange={this.change}
                  placeholder="Title"
                />
                <input
                  id="description"
                  name="description"
                  type="text"
                  value={description}
                  onChange={this.change}
                  placeholder="Description"
                />
                <input
                  id="hours"
                  name="hours"
                  type="text"
                  value={hours}
                  onChange={this.change}
                  placeholder="Hours"
                />
                <input
                  id="materials"
                  name="materials"
                  type="text"
                  value={materials}
                  onChange={this.change}
                  placeholder="Materials"
                />
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
    const { name, username, password } = this.state;

    //new user payload
    const user = { name, username, password };

    context.data
      .createUser(user)
      .then(errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          context.actions.signIn(username, password).then(() => {
            this.props.history.push("/authenticated");
          });
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
