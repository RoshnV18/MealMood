import { useState } from "react";
import ItemList from "./ItemList";

const RestraunCategory = ({ resData }) => {
  console.log(resData.itemCards);

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100  p-4  rounded-lg">
      <div className="flex justify-between ">
        <span className="font-bold ">
          {resData.title} ({resData.itemCards.length})
        </span>
        <span className="font-bold text-3xl">˅</span>
      </div>
      <ItemList items={resData?.itemCards} />
    </div>
  );
};

export default RestraunCategory;
