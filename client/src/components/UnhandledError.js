import React from "react";

const Error = props => {
  return (
    <div className="bounds">
      <h1>Unhandled Error</h1>
      <p>Sorry! We just encountered an unexpected error.</p>
      <p>{props.errors}</p>
    </div>
  );
};

export default Error;
