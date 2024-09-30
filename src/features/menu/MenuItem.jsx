/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItem from "../cart/UpdateItem";

const MenuItem = ({ pizza }) => {
  const dispatch = useDispatch();
  const { imageUrl, ingredients, name, unitPrice, id } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };
  return (
    <li className="flex gap-4 py-2 font-montserrat">
      <img className="w-24 rounded-md" src={imageUrl} alt={name} />
      <div className="flex w-[600px] justify-between items-center">
        <div>
          <p className="font-semibold">{name}</p>
          <p>{ingredients.join(", ")}</p>
          <p className="text-green-500 font-semibold">${unitPrice}</p>
        </div>
        <div>
          {isInCart && (
            <div className="flex gap-4 items-center">
              <UpdateItem pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!isInCart && (
            <button
              onClick={handleAddToCart}
              className="bg-green-400  px-4 py-1 rounded-lg font-semibold text-white font-montserrat"
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
