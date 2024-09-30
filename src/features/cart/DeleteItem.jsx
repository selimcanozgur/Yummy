/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="bg-green-400 px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded-lg text-white font-semibold"
        onClick={() => dispatch(deleteItem(pizzaId))}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteItem;
