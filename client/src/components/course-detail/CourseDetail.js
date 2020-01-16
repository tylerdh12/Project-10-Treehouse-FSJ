import React, { Component } from "react";

// Import Actions--Bar Component
import ActionsBar from "./ActionsBar";
import Details from "./Details";

class CourseDetail extends Component {
  render() {
    return (
      <div>
        <ActionsBar />
        <Details />
      </div>
    );
  }
}

export default CourseDetail;
