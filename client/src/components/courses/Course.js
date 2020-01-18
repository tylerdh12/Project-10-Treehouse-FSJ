import React, { Component } from "react";

export default class Course extends Component {
  render() {
    const url = "course-detail/";
    return (
      <div className="grid-33">
        <a className="course--module course--link" href={url + this.props.id}>
          <h4 className="course--label">Course</h4>
          <h4 className="course--title">{this.props.title}</h4>
        </a>
      </div>
    );
  }
}
