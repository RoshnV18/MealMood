import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#f1f0f0]  text-center py-6 text-sm text-gray-600">
      <div className="mb-2 font-semibold text-lg text-gray-800">MealMood</div>

      <div className="space-x-6 mb-2">
        <Link to={"/"} className="hover:text-black transition">
          Home
        </Link>
        <Link to={"/about"} className="hover:text-black transition">
          About
        </Link>
        <Link to={"/"} className="hover:text-black transition">
          Restaurants
        </Link>
        <Link to={"/contact"} className="hover:text-black transition">
          Contact
        </Link>
      </div>
      <p>Created by Roshan</p>

      <p className="text-xs text-gray-500 mt-2">
        © 2025 MealMood. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
