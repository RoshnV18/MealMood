import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          className="text-left p-2 m-2 flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="my-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">
              {item.card.info.description ||
                "There is no Description of this Item"}
            </p>
          </div>

          <div className=" h-20 my-2 w-3/12">
            <div className="absolute">
              <button className="  mx-10 px-2  mt-14 bg-black text-white rounded-sm cursor-pointer">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded-lg w-20 mx-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
