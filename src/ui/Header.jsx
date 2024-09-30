import Logo from "./Logo";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import { IoBagOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../features/cart/cartSlice";

function Header() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <header className="w-full h-[110px] flex justify-around items-center shadow-md fixed top-0 bg-white z-30">
      <Logo />
      <SearchOrder />
      <div className="flex items-center gap-4">
        <Username />
        <Link to="/cart" className="relative">
          <IoBagOutline className="text-2xl" />
          {totalCartQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {totalCartQuantity}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
