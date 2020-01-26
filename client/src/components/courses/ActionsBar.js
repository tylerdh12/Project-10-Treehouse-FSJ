import React from "react";
import Cookies from "js-cookie";

const ActionBar = props => {
  const { context } = props;
  const authUser = context.authenticatedUser;

  const { deleteCourse } = props.context.actions;

  function handleDelete(event) {
    event.preventDefault();
    deleteCourse(
      props.courseId,
      authUser.emailAddress,
      Cookies.get("password")
    );
  }

  function ifAuth(props) {
    if (!authUser) {
      return null;
    } else if (authUser.userId === props.ownerId) {
      return (
        <span>
          <a className="button" href={props.courseId + "/update"}>
            Update Course
          </a>
          <a className="button" href="/" onClick={handleDelete}>
            Delete Course
          </a>
        </span>
      );
    }
  }

  return (
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          {ifAuth(props)}
          <a className="button button-secondary" href="/">
            Return to List
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;