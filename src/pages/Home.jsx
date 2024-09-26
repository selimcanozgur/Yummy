import { useRef } from "react";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

function Home() {
  const orderRef = useRef(null);
  const handleScroll = () => {
    orderRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <SectionOne handleScroll={handleScroll} />
      <SectionTwo orderRef={orderRef} />
    </div>
  );
}

export default Home;
