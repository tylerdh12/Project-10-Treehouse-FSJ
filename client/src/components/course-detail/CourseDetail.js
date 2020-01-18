import React, { Component } from "react";
import config from "../../config";

// Import Actions--Bar Component
import ActionsBar from "./ActionsBar";
// import Details from "./Details";

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
    course: {},
    errors: []
  };

  componentDidMount() {
    console.log("Location URL:" + this.props.location.pathname);
    this.getCourse();
  }

  render() {
    return (
      <div>
        <ActionsBar />
        {/* <Details
          title={this.state.title}
          // description={this.state.description}
          // estimatedTime={this.state.estimatedTime}
          // materialsNeeded={this.state.materialsNeeded}
          // firstName={this.state.owner.firstName}
          // lastName={this.state.owner.lastName}
        /> */}
      </div>
    );
  }

  // getId() {
  //   let courseIdParen = this.props.location;
  //   let courseId = courseIdParen.replace("/", "");
  //   return courseId;
  // }

  async getCourse() {
    console.log(this.props.location);
    const url = "/courses/" + this.state.courseId;
    const response = await this.api(url, "GET", null, true);
    if (response.status === 200) {
      return response.json().then(data => {
        // console.log(data);
        // return this.setState({
        //   title: data.title
        //   description: data.description
        //   estimatedTime: data.estimatedTime
        //   materialsNeeded: data.materialsNeeded
        //   firstName: data.owner.firstName
        //   lastName: data.owner.lastName
        // });
      });
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }
}

export default CourseDetail;
