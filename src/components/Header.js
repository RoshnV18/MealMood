import { useContext, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [input, setInput] = useState("login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const handleClick = () => {
    input === "login" ? setInput("logout") : setInput("login");
  };

  return (
    <div className="sticky top-0 z-50  bg-[#F6F6F6] shadow-md ">
      <div className="flex flex-col items-center  sm:flex-row sm:justify-between px-4  py-3 gap-3 sm:gap-0 sm:h-auto ">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">🍔</div>
          <div className="text-xl font-bold text-gray-800">MealMood</div>
        </div>

        <nav className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 list-none m-0 p-0 text-center w-full sm:w-auto">
            <li className="text-sm font-medium text-gray-600">
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
            <li>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 no-underline"
              >
                Cart ({cartItems.length})
              </Link>
            </li>
            <li>
              <button
                className={`${
                  input === "logout"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white px-4 py-2 rounded-lg transition-colors duration-200 border-none cursor-pointer font-medium w-full sm:w-auto`}
                onClick={handleClick}
              >
                {input}
              </button>
            </li>
            <li className="text-sm text-gray-700">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
