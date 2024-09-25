import Logo from "./Logo";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="w-full h-[110px] flex justify-around items-center shadow-md">
      <Logo />
      <SearchOrder />
    </header>
  );
}

export default Header;
