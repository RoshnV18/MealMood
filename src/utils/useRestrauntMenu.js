import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resItem, setResItem] = useState(null);
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResItem(json.data);

    const regularCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const allItems = regularCards
      .map((card) => card.card.card)
      .filter((c) => c?.itemCards)
      .flatMap((c) => c.itemCards);

    setResMenu(allItems || []);
  };

  return { resItem, resMenu };
};

export default useRestrauntMenu;
