/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { useNavigate } from "react-router-dom";

const SectionTwo = ({ orderRef }) => {
  const { username } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
    window.scrollTo(0, 0);
  };

  return (
    <div ref={orderRef} className="h-[100vh] text-center px-24 py-24">
      <h1 className="pt-36 text-4xl font-semibold font-poppins text-zinc-700">
        Welcome To Yummy Pizza
      </h1>
      <h2 className="pt-12 text-xl font-poppins text-zinc-700 pb-10">
        Start your order by giving us your name 👋
      </h2>
      {username === "" ? (
        <CreateUser />
      ) : (
        <button
          onClick={handleClick}
          className="text-white rounded-lg px-4 py-2 bg-green-500 font-semibold capitalize"
        >
          Continue ordering, {username}
        </button>
      )}
    </div>
  );
};

export default SectionTwo;
