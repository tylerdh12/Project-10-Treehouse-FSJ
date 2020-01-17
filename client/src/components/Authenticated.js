import React from "react";

export default ({ context }) => {
  const authUser = context.authenticatedUser;

  return (
    <div className="bounds">
      <div>
        <h1>{authUser.firstName} is Authenticated!</h1>
        <p>Your username is {authUser.emailAddress}.</p>
      </div>
    </div>
  );
};
