import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loader from "../components/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Header />
      <main className="mt-28">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
