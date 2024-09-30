/* eslint-disable react/prop-types */

import UpdateItem from "./UpdateItem";
import DeleteItem from "./DeleteItem";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

const CartItem = ({ pizza }) => {
  const { pizzaId, quantity, name, totalPrice } = pizza;
  console.log(pizza);
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="flex gap-2" key={pizzaId}>
      <p>{quantity}x</p>
      <p>{name}</p>
      <p>{totalPrice}</p>

      <UpdateItem pizzaId={pizzaId} currentQuantity={currentQuantity} />
      <DeleteItem pizzaId={pizzaId} />
    </li>
  );
};

export default CartItem;
