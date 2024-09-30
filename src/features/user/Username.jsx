import { useSelector } from "react-redux";

const Username = () => {
  const { username } = useSelector((state) => state.user);

  if (!username) return null;

  return (
    <p className="font-montserrat font-medium tracking-wide capitalize">
      {username}
      <span>&#39;s cart</span>
    </p>
  );
};

export default Username;
