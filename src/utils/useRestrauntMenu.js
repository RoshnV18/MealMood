import { useState, useEffect } from "react";
import { MENU_API, proxyUrl } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resItem, setResItem] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(proxyUrl + MENU_API + resId);
      const text = await res.text();

      let json;
      try {
        json = JSON.parse(text);
      } catch (err) {
        console.error("Invalid JSON returned:", text);
        return;
      }

      setResItem(json.data);

      const regularCards =
        json?.data?.cards?.find(
          (c) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards
        )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const itemCategories = regularCards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setCategory(itemCategories || []);
    } catch (err) {
      console.error("Fetch failed:", err.message);
    }
  };

  return { resItem, category };
};

export default useRestrauntMenu;
