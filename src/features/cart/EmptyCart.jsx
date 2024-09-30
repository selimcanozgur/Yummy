import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-24">
      <p className="font-montserrat font-semibold text-lg">
        Your cart has been cleared
      </p>
      <button>
        <Link to="/menu"> ⬅ Back to menu</Link>
      </button>
    </div>
  );
};

export default EmptyCart;
