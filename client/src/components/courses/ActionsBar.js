import React from "react";
import Cookies from "js-cookie";
import config from "../../config";
import { useHistory } from "react-router-dom";

const ActionBar = props => {
  let history = useHistory();
  const authUser = props.context.authenticatedUser;

  function handleDelete(event) {
    event.preventDefault();
    courseDelete(props);
  }

  async function courseDelete(props) {
    await fetch(`${config.apiBaseUrl}/courses/${props.courseId}`, {
      method: "DELETE",
      headers: new Headers({
        Authorization:
          "Basic " +
          btoa(
            props.context.authenticatedUser.emailAddress +
              ":" +
              Cookies.get("password")
          )
      })
    }).then(async res => {
      if (res.ok === true) {
        history.push("/");
      } else if (res.status === 500) {
        history.push("/error");
      } else {
        window.alert("Sorry, could not delete the course!");
      }
    });
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
