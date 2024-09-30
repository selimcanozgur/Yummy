import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(deleteItem(pizzaId))}>Delete</button>
    </div>
  );
};

export default DeleteItem;
