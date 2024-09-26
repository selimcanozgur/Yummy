import PropTypes from "prop-types";

const SectionOne = ({ handleScroll }) => {
  return (
    <section className="w-full">
      <img className="" src="/img/main-pizza.png" alt="main-pizza" />
      <div className="content absolute top-36 left-8 sm:left-24 sm:top-48 md:left-24 md:top-48 lg:left-36 lg:top-60 xl:left-48 xl:top-64">
        <h1 className="text-md md:text-2xl lg:text-3xl xl:text-4xl text-red-500 font-poppins font-bold tracking-wide mb-4 uppercase">
          Perfect Pizza, Every Time!
        </h1>
        <h1 className="text-sm md:text-2xl lg:text-2xl xl:text-3xl text-white/80 font-poppins font-bold tracking-wide mb-6">
          Customize Your Slice
        </h1>
        <button
          onClick={handleScroll}
          className="bg-white text-xs md:text-sm lg:text-base px-4 py-2 font-roboto font-medium rounded-lg"
        >
          Click to order
        </button>
      </div>
    </section>
  );
};

SectionOne.propTypes = {
  handleScroll: PropTypes.func.isRequired,
};

export default SectionOne;
