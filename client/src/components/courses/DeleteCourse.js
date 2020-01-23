import React from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

// This component is a bit of an oddball as it doesn't render any
// visual elements. Instead, it signs out the authenticated user
// and redirects the user to the default route (i.e. the list of courses).

const DeleteCourse = props => {
  const { context } = this.props;
  context.data.deleteCourse(
    props.courseId,
    context.authenticatedUser.emailAddress,
    Cookies.get("password")
  );
  return <Redirect to="/" />;
};
export default DeleteCourse;
