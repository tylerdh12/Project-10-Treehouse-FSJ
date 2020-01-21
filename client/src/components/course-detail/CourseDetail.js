import React, { Component } from "react";
import config from "../../config";

// Import Actions--Bar Component
import ActionsBar from "./ActionsBar";
import Details from "./Details";
class CourseDetail extends Component {
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

  state = {
    loading: true,
    courseId: 1,
    course: [],
    owner: [],
    materialsNeeded: [],
    errors: []
  };

  componentDidMount() {
    this.getId();
    this.getCourse();
  }

  render() {
    return (
      <div>
        <ActionsBar />
        <Details
          course={this.state.course}
          owner={this.state.owner}
          key={this.state.course.id}
        />
      </div>
    );
  }

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

export default CourseDetail;
