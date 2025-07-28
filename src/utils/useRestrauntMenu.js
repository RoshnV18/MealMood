import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resItem, setResItem] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResItem(json.data);

    const regularCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const category = regularCards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(category);

    setCategory(category || []);
  };

  return { resItem, category };
};

export default useRestrauntMenu;
