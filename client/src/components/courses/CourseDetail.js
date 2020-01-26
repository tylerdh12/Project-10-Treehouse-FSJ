import * as React from "react";
import config from "../../config";
import withContext from "./../../Context";

// This component provides the "Course Detail" screen by retrieving the detail
// for a course from the REST API's /api/courses/:id route and rendering the course.
// The component also renders a "Delete Course" button that when clicked should send a
// DELETE request to the REST API's /api/courses/:id route in order to delete a course.
// This component also renders an "Update Course" button for navigating to the
// "Update Course" screen.

// Import Actions--Bar Component
import ActionsBar from "./ActionsBar";
import Details from "./Details";

//Adds context for Auth User to make dynamic buttons for Action Bar
const ActionsBarWithContext = withContext(ActionsBar);

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      courseId: null,
      course: [],
      owner: [],
      materialsNeeded: [],
      errors: []
    };
  }

  api(path, method = "GET", body = null) {
    const url = config.apiBaseUrl + path;
    const options = {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    return fetch(url, options);
  }

  componentDidMount() {
    this.getId();
    this.getCourse();
  }

  render() {
    return (
      <div>
        <ActionsBarWithContext
          courseId={this.state.course.id}
          ownerId={this.state.owner.id}
        />
        <Details
          course={this.state.course}
          owner={this.state.owner}
          key={this.state.course.id}
        />
      </div>
    );
  }

  async creatList() {
    let materialsList = this.state.course.materialsNeeded.split("\n");
    this.setState(() => {
      return { materialsNeeded: materialsList };
    });
  }

  async getId() {
    let courseIdParen = await this.props.location.pathname;
    let courseId = await courseIdParen.replace("/courses/", "");
    this.setState({
      courseId: courseId
    });
  }

  async getCourse() {
    const url = "/courses/" + this.props.match.params.id;
    const response = await this.api(url, "GET", null, true);
    if (response.status === 200) {
      return response.json().then(data => {
        this.setState({
          course: data,
          owner: data.owner
        });
      });
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error();
    }
  }
}

export default CourseDetail;
