import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Course from "./components/courses/Course";
import CreateCourse from "./components/create-course/CreateCourse";
import CourseDetail from "./components/course-detail/CourseDetail";
import UserSignUp from "./components/user/UserSignUp";
// import UserSignIn from "./components/user/UserSignIn";
import NotFound from "./components/NotFound";

//Import With Context
import withContext from "./Context";

// Connect Course to context
const CourseWithContext = withContext(Course);

export default () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          {/* This Component will load the Courses and show them using the Courses Component  */}
          <Route exact path="/" component={CourseWithContext} />
          <Route path="/course-detail" component={CourseDetail} />
          <Route path="/create-course" component={CreateCourse} />
          <Route path="/sign-up" component={UserSignUp} />
          {/* <Route path="/sign-in" component={UserSignIn} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
