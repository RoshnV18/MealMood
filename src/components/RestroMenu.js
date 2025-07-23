import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestroMenu = () => {
  const [resItem, setResItem] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );
    const json = await data.json();

    setResItem(json.data);

    const regularCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const allItems = regularCards
      .map((card) => card.card.card)
      .filter((c) => c?.itemCards)
      .flatMap((c) => c.itemCards);

    setResMenu(allItems || []);
    console.log(allItems);
  };

  if (resItem === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resItem?.cards[2]?.card?.card?.info || {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      <ul>
        {resMenu.map((item, index) => (
          <li key={index}>
            {item.card.info.name} - ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestroMenu;
