import React, { PureComponent } from "react";

export default class Details extends PureComponent {
  render() {
    const mylist = ["Item 1", "Item 2", "Item 3"];

    const {
      title,
      description,
      estimatedTime,
      materialsNeeded
    } = this.props.course;
    const { firstName, lastName } = this.props.owner;

    // THIS IS THE FUNCTION IM USING
    // If i use my this.props.course.materialsNeeded I end up with this error
    // TypeError: Cannot read property 'map' of undefined
    // finishClassComponent
    // node_modules/react-dom/cjs/react-dom.development.js:18470
    // updateClassComponent
    // node_modules/react-dom/cjs/react-dom.development.js:18423
    // beginWork$1
    // node_modules/react-dom/cjs/react-dom.development.js:20186
    // HTMLUnknownElement.callCallback
    // node_modules/react-dom/cjs/react-dom.development.js:336
    // invokeGuardedCallbackDev
    // node_modules/react-dom/cjs/react-dom.development.js:385
    // invokeGuardedCallback
    // node_modules/react-dom/cjs/react-dom.development.js:440
    // beginWork$$1
    // node_modules/react-dom/cjs/react-dom.development.js:25780
    // performUnitOfWork
    // node_modules/react-dom/cjs/react-dom.development.js:24695
    // workLoopSync
    // node_modules/react-dom/cjs/react-dom.development.js:24671
    // performSyncWorkOnRoot
    // node_modules/react-dom/cjs/react-dom.development.js:24270
    // scheduleUpdateOnFiber
    // node_modules/react-dom/cjs/react-dom.development.js:23698
    // updateContainer
    // node_modules/react-dom/cjs/react-dom.development.js:27103
    // (anonymous function)
    // node_modules/react-dom/cjs/react-dom.development.js:27528
    // unbatchedUpdates
    // node_modules/react-dom/cjs/react-dom.development.js:24433
    // legacyRenderSubtreeIntoContainer
    // node_modules/react-dom/cjs/react-dom.development.js:27527
    // render
    // node_modules/react-dom/cjs/react-dom.development.js:27608

    let newList = mylist.map((item, index) => {
      return <li key={index}>{item}</li>;
    });

    // creatList = item => {
    //   this.props.course.materialsNeeded.map((item, key) => (
    //     <li key={item.key}>{item}</li>
    //   ));
    // };
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
