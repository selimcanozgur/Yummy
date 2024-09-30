/* eslint-disable react/prop-types */

import UpdateItem from "./UpdateItem";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";

const CartItem = ({ pizza }) => {
  const { pizzaId, quantity, name, totalPrice } = pizza;
  console.log(pizza);
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <>
      <li
        className="flex gap-6 md:gap-12 mb-4 bg-yellow-100 px-6 py-4 rounded-lg"
        key={pizzaId}
      >
        <p>{quantity}x</p>
        <p>{name}</p>
        <p>${totalPrice}</p>
        <UpdateItem pizzaId={pizzaId} currentQuantity={currentQuantity} />
      </li>
    </>
  );
};

export default CartItem;
