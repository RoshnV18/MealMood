import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, buttoLabel, onClick }) => {
  return (
    <div>
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
            className="text-left p-2 m-2 flex justify-between border-b-2 border-gray-300"
            key={itemInfo.id}
          >
            {/* Item Info */}
            <div className="w-9/12">
              <div className="my-2">
                <span className="font-semibold text-sm">{itemInfo.name}</span>
                <span className="font-semibold text-sm"> - ₹{price}</span>
              </div>
              <p className="text-xs">
                {itemInfo.description ||
                  "There is no description for this item."}
              </p>
            </div>

            {/* Item Image + Button */}
            <div className="h-20 my-2 w-3/12 relative">
              <button
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white rounded-sm cursor-pointer"
                onClick={handleButtonClick}
              >
                {buttoLabel}
              </button>
              <img
                src={CDN_URL + itemInfo.imageId}
                alt={itemInfo.name}
                className="rounded-lg w-20 h-20 mx-auto object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
