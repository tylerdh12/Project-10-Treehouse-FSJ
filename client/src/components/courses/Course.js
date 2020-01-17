import React, { Component } from "react";

export default class Course extends Component {
  render() {
    return (
      <div className="grid-33">
        <a
          className="course--module course--link"
          href="course-detail/{course.id}"
        >
          <h4 className="course--label">Course</h4>
          <h4 className="course--title">Title</h4>
        </a>
      </div>
    );
  }

  getCourses = async () => {
    const { context } = this.props;

    context.actions
      .getCourses()
      .then(course => {
        if (course === null) {
          this.setState(() => {
            return { errors: ["Unable to retrieve Courses from DB"] };
          });
        } else {
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/error");
      });
  };

  componentDidMount() {
    this.getCourses();
  }
}
