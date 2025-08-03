import { useState, useEffect } from "react";
import { getMenuUrl } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resItem, setResItem] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(getMenuUrl(resId));
      const json = await response.json();

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
