import React from "react";

const ActionBar = props => {
  const { context } = props;
  const authUser = context.authenticatedUser;
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

  function ifAuth(props) {
    if (authUser.userId === props.ownerId) {
      return (
        <span>
          <a className="button" href={props.courseId + "/update"}>
            Update Course
          </a>
          <a className="button" href={props.courseId + "/delete"}>
            Delete Course
          </a>
        </span>
      );
    }
  }
};

export default ActionBar;
