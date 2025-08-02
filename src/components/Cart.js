import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      {cartItems.map((cart, index) => (
        <p key={index}>{cart.card.info.name}</p>
      ))}
    </div>
  );
};

export default Cart;
