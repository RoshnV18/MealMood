import { address } from "motion/react-client";
import User from "./User.js";
import UserClass from "./UserClass.js";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <User name={"Roshan Function"} address={"Birpur"} />
      <UserClass name={"Roshan Class"} address={"Noida"} />
    </div>
  );
};

export default About;
