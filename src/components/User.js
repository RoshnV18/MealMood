import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);

  return (
    <div className="user">
      <h1>{count}</h1>
      <h3>Name : {name}</h3>
      <h3>Location : Birpur</h3>
    </div>
  );
};

export default User;
