/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

const UpdateItem = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 text-lg font-bold text-white">
      <button
        className="bg-green-400 rounded-full px-3"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>
      <span className="text-zinc-900 font-medium">{currentQuantity}</span>
      <button
        className="bg-green-400 rounded-full px-3"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
};

export default UpdateItem;
