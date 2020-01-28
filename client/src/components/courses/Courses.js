import React from "react";
import Course from "./Course";
import config from "../../config";

// This component provides the "Courses" screen by retrieving the list of courses
// from the REST API's /api/courses route and rendering a list of courses.
// Each course needs to link to its respective "Course Detail" screen.
// This component also renders a link to the "Create Course" screen.

export default class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      courses: [],
      errors: []
    };
  }
  api(path, method = "GET", body = null) {
    const url = config.apiBaseUrl + path;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options);
  }

  componentDidMount() {
    this.getCourses();
  }

  render() {
    return (
      <div className="bounds">
        {this.state.courses.map(course => (
          <Course title={course.title} id={course.id} key={course.id} />
        ))}

        <div className="grid-33">
          <a
            className="course--module course--add--module"
            href="courses/create"
          >
            <h3 className="course--add--title">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 13 13"
                className="add"
              >
                <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
              </svg>
              New Course
            </h3>
          </a>
        </div>
      </div>
    );
  }

  async getCourses() {
    const response = await this.api("/courses", "GET", null, true);
    if (response.status === 200) {
      return response.json().then(data => {
        return this.setState({
          courses: data
        });
      });
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }
}
