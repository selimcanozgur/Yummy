import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

const Cart = () => {
  const { username } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <button className="text-blue-500">
        <Link to="/menu"> ⬅ Back to menu </Link>
      </button>
      <p>Your cart, {username} </p>
      <ul>
        {cart.map((pizza) => (
          <li className="flex gap-2" key={pizza.pizzaId}>
            <p>{pizza.quantity}x</p>
            <p>{pizza.name}</p>
            <UpdateItem pizzaId={pizza.pizzaId} />
            <DeleteItem pizzaId={pizza.pizzaId} />
          </li>
        ))}
      </ul>
      <button>
        <Link to="/order/new"> Order now </Link>
      </button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default Cart;
