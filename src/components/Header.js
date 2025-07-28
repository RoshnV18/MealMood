import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [input, setInput] = useState("login");

  const onlineStatus = useOnlineStatus();

  const handleClick = () => {
    input === "login" ? setInput("logout") : setInput("login");
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="flex flex-col items-center h-24 bg-[#F6F6F6] sm:flex-row sm:justify-between  px-4 py-3 gap-3 sm:gap-0">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">🍔</div>
          <div className="text-xl font-bold text-gray-800">MealMood</div>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4">
          <ul className="flex flex-wrap items-center space-x-4 list-none m-0 p-0">
            <li className="flex items-center text-sm font-medium text-gray-600">
              Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 no-underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 no-underline"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 no-underline"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 no-underline"
              >
                About Us
              </Link>
            </li>
            <li className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200">
              Cart
            </li>
          </ul>

          <button
            className={`${
              input === "logout"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-4 py-2 rounded-lg transition-colors duration-200 border-none cursor-pointer font-medium`}
            onClick={handleClick}
          >
            {input}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
