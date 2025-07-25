const Footer = () => {
  return (
    <footer className="bg-[#f1f0f0]  text-center py-6 text-sm text-gray-600">
      <div className="mb-2 font-semibold text-lg text-gray-800">MealMood</div>

      <div className="space-x-6 mb-2">
        <a href="#" className="hover:text-black transition">
          Home
        </a>
        <a href="#" className="hover:text-black transition">
          About
        </a>
        <a href="#" className="hover:text-black transition">
          Restaurants
        </a>
        <a href="#" className="hover:text-black transition">
          Contact
        </a>
      </div>

      <p className="text-xs text-gray-500">
        © 2025 MealMood. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
