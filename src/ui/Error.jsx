import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> Something went wrong 😢</h1>
      <p>{err.data || err.message}</p>
      <button>
        <Link to="-1">Go Back</Link>
      </button>
    </div>
  );
};

export default Error;
