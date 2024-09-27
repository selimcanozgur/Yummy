import { FaPizzaSlice } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xl z-10">
      <FaPizzaSlice className="text-yellow-500 text-3xl animate-spin" />
    </div>
  );
};

export default Loader;
