import { Form, useActionData, useNavigation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);

  const isLoadingAddress = addressStatus === "loading";

  const formErros = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="absolute left-[50%] transform translate-x-[-50%] mt-10 px-12">
      <Form method="POST" className="font-roboto">
        <h2 className="mb-8 text-2xl  font-semibold text-green-500">
          Ready to order? Lets go!
        </h2>

        <div>
          <label className="flex items-center gap-2 mb-2">
            <FaUser className="text-green-500" /> <p> First Name </p>
          </label>
          <input
            className="py-3 px-4 rounded-lg focus:outline-none border w-72 mb-6"
            type="text"
            name="customer"
            required
            defaultValue={username}
          />
        </div>

        <div>
          <div>
            <label className="flex items-center gap-2 mb-2">
              <FaPhone className="text-green-500" /> <p> Phone Number </p>
            </label>
            <input
              className="py-3 px-4 rounded-lg focus:outline-none border w-72 mb-6"
              type="tel"
              name="phone"
              required
            />
          </div>
          {formErros?.phone && (
            <p className="bg-red-200 px-4 py-4 rounded-lg mb-4">
              {formErros.phone}
            </p>
          )}
        </div>

        <div>
          <div>
            <label className="flex items-center gap-2 mb-2">
              <FaRegAddressCard className="text-green-500" />
              <p> Address </p>
            </label>

            <input
              className="py-3 px-4 rounded-lg focus:outline-none border w-72 mb-6"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />

            {addressStatus === "error" && (
              <p className="bg-red-200 px-4 py-4 rounded-lg mb-4">
                {errorAddress}
              </p>
            )}

            {!position.latitude && !position.longitude && (
              <button
                disabled={isLoadingAddress}
                className="ml-4 bg-green-400 px-3 py-2 rounded-lg text-white font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get Position
              </button>
            )}
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="ml-2" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting || isLoadingAddress}
            className="mt-8 bg-green-400 px-4 py-2 rounded-lg text-white font-semibold"
          >
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalPrice)}`}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
