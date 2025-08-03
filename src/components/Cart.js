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
    <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">Cart</h1>

      <div className="text-center">
        <button
          className="px-4 py-2 mt-2 sm:mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={handleClearButton}
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-lg sm:text-2xl text-gray-600">
            Nothing in the Cart. Add items to Cart
          </h2>
        </div>
      ) : (
        <div className="mt-10 w-full sm:w-10/12 md:w-8/12 lg:w-9/12 mx-auto">
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
