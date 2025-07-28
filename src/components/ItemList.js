import React from "react";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="flex justify-between" key={item.card.info.id}>
          <p className="m-2 p-2 text-left">{item.card.info.name}</p>
          <p className="m-2 p-2 text-left">
            Rs-{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
