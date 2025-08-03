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
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        {name}
      </h1>

      <h3 className="text-sm sm:text-base md:text-lg font-medium text-center text-gray-600 mb-6">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </h3>

      <div className="space-y-4 sm:space-y-6">
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
