import PropTypes from "prop-types";
import CreateUser from "../features/user/CreateUser";

const SectionTwo = ({ orderRef }) => {
  return (
    <div ref={orderRef} className="h-[100vh] text-center px-24">
      <h1 className="pt-36 text-4xl font-semibold font-poppins text-zinc-700">
        Welcome To Yummy Pizza
      </h1>
      <h2 className="pt-12 text-xl font-poppins text-zinc-700 pb-10">
        Start your order by giving us your name 👋
      </h2>
      <CreateUser />
    </div>
  );
};

SectionTwo.propTypes = {
  orderRef: PropTypes.func.isRequired,
};

export default SectionTwo;
