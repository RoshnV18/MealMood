import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [input, setInput] = useState("login");

  const handleClick = () => {
    input === "login" ? setInput("logout") : setInput("login");
  };

  return (
    <div className="heading">
      <div className="logo">
        <div className="logo-img">🍔</div>
        <div>MealMood</div>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleClick}>
            {input}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
