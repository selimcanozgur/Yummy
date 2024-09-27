import { redirect } from "react-router-dom";
import { createOrder, getMenu, getOrder } from "./apiRestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export const menuLoader = async () => {
  const data = await getMenu();
  return data;
};

export const orderLoader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  return order;
};

// Form içindeki verileri getirir onSubmit'e gerek yoktur.
export async function action({ request }) {
  // Form verilerini aldık
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) errors.phone = "Please enter phone number";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}
