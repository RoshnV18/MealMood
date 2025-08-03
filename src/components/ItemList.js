import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, buttoLabel, onClick }) => {
  return (
    <div className="space-y-4">
      {items.map((item) => {
        const itemInfo = item.card.info;
        const price = (itemInfo.price || itemInfo.defaultPrice) / 100;

        const handleButtonClick = () => {
          if (buttoLabel === "Remove") {
            onClick(itemInfo.id);
          } else {
            onClick(item);
          }
        };

        return (
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-gray-200 p-4 rounded-md shadow-sm bg-white"
            key={itemInfo.id}
          >
            <div className="flex-1 sm:pr-4">
              <div className="mb-1">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {itemInfo.name}
                </h3>
                <p className="text-sm text-gray-600">₹{price}</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                {itemInfo.description ||
                  "There is no description for this item."}
              </p>
            </div>

            <div className="flex flex-col items-center mt-4 sm:mt-0 sm:w-28">
              <img
                src={CDN_URL + itemInfo.imageId}
                alt={itemInfo.name}
                className="rounded-lg w-20 h-20 object-cover mb-2"
              />
              <button
                className="px-3 py-1 text-sm bg-black text-white rounded shadow hover:bg-gray-800"
                onClick={handleButtonClick}
              >
                {buttoLabel}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
