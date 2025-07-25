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
          ?.join(" ")
          .toLowerCase()
          .includes(inputText.toLowerCase())
    );
    setFilteredRes(filteredList);
  };

  if (onlineStatus === false) {
    return (
      <h1>
        Oops, Look like you are offline. please check your internet connection
      </h1>
    );
  }

  return !listOfRes.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <button
          className="top-rated "
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRes(filteredList);
          }}
        >
          Top Rated Restro
        </button>
        <div className="search">
          <input
            value={inputText}
            className="search-input"
            type="text"
            placeholder="search the restraurant by name and cuisines"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          ></input>
          <button className="search-btn" onClick={handleClick}>
            search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRes.map((restro) => (
          <Link key={restro?.info?.id} to={"/restraunt/" + restro?.info?.id}>
            <RestroCard resData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
