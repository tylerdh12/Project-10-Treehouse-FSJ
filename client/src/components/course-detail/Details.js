import React, { PureComponent } from "react";

export default class Details extends PureComponent {
  render() {
    const materialsNeeded =
      "* 1/2 x 3/4 inch parting strip * 1 x 2 common pine * 1 x 4 common pine * 1 x 10 common pine * 1/4 inch thick lauan plywood * Finishing Nails * Sandpaper * Wood Glue * Wood Filler * Minwax Oil Based Polyurethane";
    const { title, description, estimatedTime } = this.props.course;
    const { firstName, lastName } = this.props.owner;

    let newList = materialsNeeded.split("* ").map((item, index) => {
      if (item !== "") {
        return <li key={index}>{item}</li>;
      }
    });

    return (
      <div className="bounds course--detail">
        <div className="grid-66">
          <div className="course--header">
            <h4 className="course--label">Course</h4>
            <h3 className="course--title">{title}</h3>
            <p>
              By {firstName} {lastName}
            </p>
          </div>
          <div className="course--description">
            <p>{description}</p>
          </div>
        </div>
        <div className="grid-25 grid-right">
          <div className="course--stats">
            <ul className="course--stats--list">
              <li className="course--stats--list--item">
                <h4>Estimated Time</h4>
                <h3>{estimatedTime}</h3>
              </li>
              <li className="course--stats--list--item">
                <h4>Materials Needed</h4>
                <ul>{newList}</ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
