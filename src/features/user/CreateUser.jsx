import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateName } from "./userSlice";
import { useDispatch } from "react-redux";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (!username) return;
    navigate("/menu");
    window.scrollTo(0, 0);
    dispatch(updateName(username));
  };

  return (
    <form>
      <input
        className="rounded-lg focus:outline-none px-4 py-2 border-2 w-36 md:w-56 md:focus:w-72 duration-500 border-green-300 capitalize"
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="mt-12">
        {username.length > 0 && (
          <button
            onClick={handleClick}
            className="text-white rounded-lg  px-4 py-1 bg-green-500 "
          >
            Start ordering
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateUser;
