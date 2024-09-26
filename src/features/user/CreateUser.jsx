import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/menu");
  };

  return (
    <form>
      <input
        className="rounded-lg focus:outline-none px-4 py-2 border-2 w-56 focus:w-72 duration-500 border-green-300 capitalize"
        type="text"
        placeholder="Your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div className="mt-12">
        {userName.length > 0 && (
          <button
            onClick={handleClick}
            className="text-white rounded-lg px-4 py-2 bg-green-500 font-semibold"
          >
            Start ordering
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateUser;
