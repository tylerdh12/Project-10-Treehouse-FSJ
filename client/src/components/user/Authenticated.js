import React from "react";

// Currently this component is not being used
export default ({ context }) => {
  const authUser = context.authenticatedUser;

  return (
    <div className="bounds">
      <div>
        <h1>
          {authUser.firstName} {authUser.lastName} is Authenticated!
        </h1>
        <p>Your username is {authUser.emailAddress}.</p>
      </div>
    </div>
  );
};
