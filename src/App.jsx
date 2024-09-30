import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Menu from "./features/menu/Menu";
import Order from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Error from "./ui/Error";
import { menuLoader, orderLoader, action } from "./services/loadersRestaurant";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: action,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
