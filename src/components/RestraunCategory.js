import { useState } from "react";
import ItemList from "./ItemList";

const RestraunCategory = ({ resData }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100  p-4  rounded-lg  shadow-sm">
      <div
        className="flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-bold ">
          {resData.title} ({resData.itemCards.length})
        </span>
        <span className="text-xl mr-4">⬇️</span>
      </div>
      {showItems && <ItemList items={resData?.itemCards} />}
    </div>
  );
};

export default RestraunCategory;
