import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

const Menu = () => {
  const pizza = useLoaderData();

  return (
    <div className="flex justify-center mt-6">
      <ul>
        {pizza.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
