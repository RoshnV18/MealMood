import { Link } from "react-router";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restraurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRes(restraurants);
    setFilteredRes(restraurants);
  };

  const handleClick = () => {
    const filteredList = listOfRes.filter(
      (res) =>
        res?.info?.name.toLowerCase().includes(inputText.toLowerCase()) ||
        res?.info?.cuisines
          .join(" ")
          .toLowerCase()
          .includes(inputText.toLowerCase())
    );
    setFilteredRes(filteredList);
  };

  if (onlineStatus === false) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-white">
        <div className="text-center p-8 bg-white rounded-xl shadow-xl max-w-md border border-gray-200">
          <div className="text-6xl mb-4">📡</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            You're Offline
          </h1>
          <p className="text-gray-500">Check your internet and try again.</p>
        </div>
      </div>
    );
  }

  return !listOfRes.length ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <button
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-200"
              onClick={() => {
                const filteredList = listOfRes.filter(
                  (res) => res?.info?.avgRating > 4.5
                );
                setFilteredRes(filteredList);
              }}
            >
              ⭐ Top Rated Restaurants
            </button>

            <div className="flex w-full sm:w-auto max-w-md">
              <input
                value={inputText}
                className="flex-1 px-5 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-500 shadow-sm"
                type="text"
                placeholder="Search restaurants or cuisines..."
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-full font-semibold shadow-md transition duration-200"
                onClick={handleClick}
              >
                🔍 Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {filteredRes.map((restro) => (
            <Link
              key={restro?.info?.id}
              to={"/restraunt/" + restro?.info?.id}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              <RestroCard resData={restro} />
            </Link>
          ))}
        </div>

        {filteredRes.length === 0 && listOfRes.length > 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              No matches found
            </h3>
            <p className="text-gray-500">
              Try a different name or cuisine to explore more options.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
