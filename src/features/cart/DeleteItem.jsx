/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="bg-green-400 px-4 py-2 rounded-lg text-white font-semibold"
        onClick={() => dispatch(deleteItem(pizzaId))}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteItem;
