import { useDispatch } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

const UpdateItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 text-lg font-bold text-white">
      <button
        className="bg-green-400 rounded-full w-8 h-8"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>
      <button
        className="bg-green-400 rounded-full w-8 h-8"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
};

export default UpdateItem;
