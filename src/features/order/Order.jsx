import OrderItem from "./OrderItem";
import { useLoaderData } from "react-router-dom";
import { formatDate } from "../../utils/helpers";
import UpdateOrder from "./UpdateOrder";

const Order = () => {
  const order = useLoaderData();

  const {
    id,
    estimatedDelivery,
    cart,
    orderPrice,
    priority,
    priorityPrice,
    status,
  } = order;

  return (
    <div className="mx-auto w-[700px] pt-8">
      <div className="flex justify-between items-center">
        <p className="font-poppins font-semibold text-xl text-zinc-700">
          Oder #{id} status
        </p>
        <div className="flex gap-4">
          {priority && (
            <p className="uppercase bg-red-500 rounded-full text-white px-4 py-1 font-semibold">
              priority
            </p>
          )}
          <p className="uppercase bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
            {status} order
          </p>
        </div>
      </div>
      <div className="flex bg-yellow-200/70 mt-4 px-6 py-4 justify-between items-center">
        <p>Order should have arriveds</p>
        <p className="text-sm text-zinc-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul>
        {cart.map((item) => (
          <OrderItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="bg-green-200/70 text-lg font-montserrat px-6 py-4 mt-4 font-medium">
        <p className="text-zinc-600">
          Price pizza: <span className="ml-2"> ${orderPrice} </span>
        </p>
        <p className="text-zinc-600">
          Price priority: <span className="ml-2"> ${priorityPrice} </span>
        </p>
        <p>
          To pay on delivery:{" "}
          <span className="ml-2 font-semibold">
            ${orderPrice + priorityPrice}{" "}
          </span>
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
};

export default Order;
