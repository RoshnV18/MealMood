import Shimmer from "./Shimmer";
import RestraunCategory from "./RestraunCategory";
import { useParams } from "react-router";

import useRestrauntMenu from "../utils/useRestrauntMenu";
import { useState } from "react";

const RestroMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const { resItem, category } = useRestrauntMenu(resId);

  if (resItem === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resItem?.cards[2]?.card?.card?.info || {};

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-4xl font-bold">{name}</h1>
      <h3 className="font-semibold m-4">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>
      <div className="mt-10 ">
        {category.map((c, index) => (
          <RestraunCategory
            key={index}
            resData={c?.card?.card}
            showIndex={showIndex}
            setShowIndex={setShowIndex}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RestroMenu;
