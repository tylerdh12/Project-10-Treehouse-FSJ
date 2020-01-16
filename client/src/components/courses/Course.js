import React from "react";

const Course = ({ context }) => {
  const course = context.data;

  return (
    <div className="grid-33">
      <a className="course--module course--link" href="course-detail">
        <h4 className="course--title">{course.title}</h4>
      </a>
    </div>
  );
};

export default Course;
