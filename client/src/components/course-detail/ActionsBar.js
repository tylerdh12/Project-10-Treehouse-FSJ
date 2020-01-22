import React, { Component } from "react";

export default class ActionsBar extends Component {
  render() {
    const { id } = this.props;

    return (
      <div className="actions--bar">
        <div className="bounds">
          <div className="grid-100">
            <span>
              <a className="button" href={id + "/update"}>
                Update Course
              </a>
              <a className="button" href={id + "/delete"}>
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
  }
}
