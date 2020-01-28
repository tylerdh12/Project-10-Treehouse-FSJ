import React from "react";
import config from "./../../config";
import Form from "./Form";

// This component provides the "Update Course" screen by rendering a form
// that allows a user to update one of their existing courses. The component
// also renders an "Update Course" button that when clicked sends a PUT
// request to the REST API's /api/courses/:id route. This component also
// renders a "Cancel" button that returns the user to the "Course Detail" screen.

export default class UpdateCourse extends React.Component {
  api(path, method = "GET", body = null) {
    const url = config.apiBaseUrl + path;
    const { context } = this.props;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization:
          "Basic " +
          btoa(
            context.authenticatedUser.emailAddress +
              ":" +
              context.authenticatedUser.password
          )
      }
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options);
  }

  state = {
    course: {},
    owner: {},
    errors: []
  };

  componentDidMount() {
    this.getId();
    this.getCourse();
  }

  render() {
    const {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      errors
    } = this.state.course;
    const { firstName, lastName } = this.state.owner;

    return (
      <div className="bounds course--detail">
        <h1>Update Course</h1>
        <div>
          <Form
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Update Course"
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
                        By {firstName} {lastName}
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
                            id="hours"
                            name="hours"
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
                            name="materials"
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

  async getId() {
    let courseIdParen = await this.props.location.pathname;
    let courseId = await courseIdParen.replace("/courses/", "");
    this.setState({
      courseId: courseId
    });
  }

  async getCourse() {
    const url = "/courses/" + this.props.match.params.id;
    const response = await this.api(url, "GET", null, true);
    if (response.status === 200) {
      return response.json().then(data => {
        this.setState({
          course: data,
          owner: data.owner
        });
      });
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }
}
