import { FaPizzaSlice } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <FaPizzaSlice className="text-yellow-500 text-3xl animate-spin" />
    </div>
  );
};

export default Loader;
