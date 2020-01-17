import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Courses from "./components/courses/Courses";
import CreateCourse from "./components/create-course/CreateCourse";
import UpdateCourse from "./components/update-course/UpdateCourse";
import CourseDetail from "./components/course-detail/CourseDetail";
import UserSignUp from "./components/user/UserSignUp";
import UserSignIn from "./components/user/UserSignIn";
import NotFound from "./components/NotFound";

//Import With Context
import withContext from "./Context";

// Connect Course to context
const CoursesWithContext = withContext(Courses);

export default () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          {/* This Component will load the Courses and show them using the Courses Component  */}
          <Route exact path="/" component={CoursesWithContext} />
          <Route path="/course-detail" component={CourseDetail} />
          <Route path="/create-course" component={CreateCourse} />
          <Route path="/update-course" component={UpdateCourse} />
          <Route path="/sign-up" component={UserSignUp} />
          <Route path="/sign-in" component={UserSignIn} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
