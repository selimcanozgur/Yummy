import { getMenu } from "./apiRestaurant";

export const menuLoader = async () => {
  const data = await getMenu();
  return data;
};
