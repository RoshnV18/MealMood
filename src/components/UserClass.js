import { Component } from "react";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    const { name, address } = this.props;
    return (
      <div>
        <h1>{count}</h1>
        <h3>Name : {name}</h3>
        <h3>Location : {address}</h3>
      </div>
    );
  }
}

export default UserClass;
