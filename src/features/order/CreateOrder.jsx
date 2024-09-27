import { Form, useActionData, useNavigation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErros = useActionData();

  const cart = fakeCart;

  return (
    <div className="flex justify-center mt-8">
      <Form method="POST" className="w-80">
        <h2 className="mb-8 text-2xl font-poppins font-semibold text-green-500">
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
              required
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmitting}
            className="mt-8 bg-green-400 px-4 py-2 rounded-lg text-white font-semibold"
          >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
