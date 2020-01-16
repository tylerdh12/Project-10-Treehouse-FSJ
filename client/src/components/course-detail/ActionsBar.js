import React from "react";

const ActionsBar = () => {
  return (
    <div class="actions--bar">
      <div class="bounds">
        <div class="grid-100">
          <span>
            <a class="button" href="update-course">
              Update Course
            </a>
            <a class="button" href="#">
              Delete Course
            </a>
          </span>
          <a class="button button-secondary" href="/">
            Return to List
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;
