import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import PrivateRoute from "./PrivateRoute";
import Authenticated from "./components/user/Authenticated";
import Courses from "./components/courses/Courses";
import CreateCourse from "./components/courses/CreateCourse";
import UpdateCourse from "./components/courses/UpdateCourse";
import CourseDetail from "./components/courses/CourseDetail";
import UserSignUp from "./components/user/UserSignUp";
import UserSignIn from "./components/user/UserSignIn";
import UserSignOut from "./components/user/UserSignOut";
import NotFound from "./components/NotFound";

//Import With Context
import withContext from "./Context";

// Connect Course to context
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const CoursesWithContext = withContext(Courses);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);

export default () => {
  return (
    <Router>
      <div>
        <HeaderWithContext />

        <Switch>
          {/* This Component will load the Courses and show them using the Courses Component  */}
          <Route exact path="/" component={CoursesWithContext} />
          <PrivateRoute path="/authenticated" component={AuthWithContext} />
          <PrivateRoute path="/settings" component={AuthWithContext} />
          <PrivateRoute path="/courses/create" component={CreateCourse} />
          <Route path="/courses/:id" component={CourseDetail} />
          <PrivateRoute path="/courses/:id/update" component={UpdateCourse} />
          <Route path="/sign-up" component={UserSignUpWithContext} />
          <Route path="/sign-in" component={UserSignInWithContext} />
          <PrivateRoute path="/sign-out" component={UserSignOutWithContext} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
