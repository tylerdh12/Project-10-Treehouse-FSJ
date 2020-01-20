import React, { Component } from "react";

export default class Details extends Component {
  render() {
    const course = this.props.course;
    const owner = this.props.owner;
    let materials = this.props.course.materialsNeeded;
    // let materialsList;
    // if (materials) {
    //   materialsList((materials) => {
    //     materials.map((material, index) => {
    //     return <li key={index}>{material}</li>;
    //   })});
    // }
    console.log(materials)

    return (
      <div className="bounds course--detail">
        <div className="grid-66">
          <div className="course--header">
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">{course.title}</h3>
            <p>
              By {owner.firstName} {owner.lastName}
            </p>
          </div>
          <div className="course--description">
            <p>{course.description}</p>
          </div>
        </div>
        <div className="grid-25 grid-right">
          <div className="course--stats">
            <ul className="course--stats--list">
              <li className="course--stats--list--item">
                <h4>Estimated Time</h4>
                <h3>{course.estimatedTime}</h3>
              </li>
              <li className="course--stats--list--item">
                <h4>Materials Needed</h4>
                <ul>
                  <li>{materials}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
