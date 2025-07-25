import Shimmer from "./Shimmer";
import { useParams } from "react-router";

import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestroMenu = () => {
  const { resId } = useParams();

  const { resItem, resMenu } = useRestrauntMenu(resId);

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
