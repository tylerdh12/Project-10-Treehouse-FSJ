import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import PrivateRoute from "./PrivateRoute";
import Authenticated from "./components/Authenticated";
import Courses from "./components/courses/Courses";
import CreateCourse from "./components/create-course/CreateCourse";
import UpdateCourse from "./components/update-course/UpdateCourse";
import CourseDetail from "./components/course-detail/CourseDetail";
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
          <Route path="/course-detail" component={CourseDetail} />
          <Route path="/create-course" component={CreateCourse} />
          <Route path="/update-course" component={UpdateCourse} />
          <Route path="/sign-up" component={UserSignUpWithContext} />
          <Route path="/sign-in" component={UserSignInWithContext} />
          <Route path="/sign-out" component={UserSignOutWithContext} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
