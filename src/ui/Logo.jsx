import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link className="flex items-center gap-2" to="/">
        <img
          className="w-10 md:w-14"
          src="/img/yummy-logo.png"
          alt="yummy-logo"
        />
        <h1 className="text-lg md:text-3xl uppercase text-red-500 font-montserrat font-semibold">
          Yummy
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
