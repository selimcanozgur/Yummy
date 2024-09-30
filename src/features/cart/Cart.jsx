import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

const Cart = () => {
  const { username } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="flex flex-col items-center pt-12 w-[300px] mx-auto">
      <button className="text-blue-500 mb-4">
        <Link to="/menu"> ⬅ Back to menu </Link>
      </button>
      <p className="font-semibold mt-4 mb-8 capitalize text-lg">
        Your cart, {username}{" "}
      </p>
      <ul>
        {cart.map((pizza) => (
          <CartItem key={pizza.pizzaId} pizza={pizza} />
        ))}
      </ul>
      <button className="text-sm bg-green-400 px-4 py-2 rounded-lg font-semibold text-white mb-4 mt-4">
        <Link to="/order/new"> Order now </Link>
      </button>
      <button
        className="text-sm bg-gray-400 px-4 py-2 rounded-lg font-semibold text-white"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
