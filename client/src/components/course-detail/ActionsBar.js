import React from "react";

const ActionsBar = ({ context }) => {
  return (
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
          <span>
            <a className="button" href="update-course">
              Update Course
            </a>
            <a className="button" href="{context.id}/delete">
              Delete Course
            </a>
          </span>
          <a className="button button-secondary" href="/">
            Return to List
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
