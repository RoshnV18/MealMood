import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearButton = () => {
    dispatch(clearItem());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">Cart</h1>

      <button
        className="px-4 py-2 mt-4 bg-red-500 text-white rounded-lg cursor-pointer"
        onClick={handleClearButton}
      >
        Clear Cart
      </button>

      {cartItems.length === 0 ? (
        <div className="text-center mt-8">
          <h2 className="text-2xl">Nothing in the Cart. Add items to Cart</h2>
        </div>
      ) : (
        <div className="w-6/12 mx-auto mt-10">
          <ItemList
            items={cartItems}
            buttoLabel="Remove"
            onClick={(id) => dispatch(removeItem(id))}
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
