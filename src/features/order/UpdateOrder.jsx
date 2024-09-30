/* eslint-disable react/prop-types */

import { useFetcher } from "react-router-dom";

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full mt-6 float-end">
        Make Priority
      </button>
    </fetcher.Form>
  );
};

export default UpdateOrder;
