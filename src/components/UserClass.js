import { Component } from "react";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Demo",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RoshnV18");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div>
        <h3>Name : {name}</h3>
        <h3>Location :{location}</h3>
      </div>
    );
  }
}

export default UserClass;
