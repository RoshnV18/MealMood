import UserClass from "./UserClass.js";
import { Component } from "react";
import UserContext from "../utils/UserContext.js";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="m-2 p-2">
        <h1 className="text-5xl font-bold"> About Us</h1>
        <UserClass />
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold text-xl">loggedInUser: {loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
