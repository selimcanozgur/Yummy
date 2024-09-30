/* eslint-disable react/prop-types */

const OrderItem = ({ item }) => {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex justify-between py-4">
      <div>
        <p>
          <b className="mr-2">{quantity}x</b>
          {name}
        </p>
      </div>
      <p>${totalPrice}.00</p>
    </li>
  );
};

export default OrderItem;
