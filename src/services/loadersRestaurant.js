import { getMenu, getOrder } from "./apiRestaurant";

export const menuLoader = async () => {
  const data = await getMenu();
  return data;
};

export const orderLoader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  return order;
};
