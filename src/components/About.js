import { address } from "motion/react-client";
import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;
