import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const pizza = useLoaderData();

  return (
    <div className="flex justify-center pt-6 mx-4">
      <ul>
        {pizza.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
