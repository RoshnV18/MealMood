import { Component } from "react";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Name : {this.props.name}</h3>
        <h3>Location : {this.props.address}</h3>
      </div>
    );
  }
}

export default UserClass;
