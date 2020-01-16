import React, { Component } from "react";
import Course from "./Course";

class CourseContainer extends Component {
  state = {
    contacts: []
  };
  render() {
    return (
      <div class="bounds">
        <Course />
      </div>
    );
  }
}

export default CourseContainer;
