import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import About from "../pages/About";
import CheckoutRoom from "../pages/CheckoutRoom";
import CheckoutRestaurn from "../pages/CheckoutRestauran";
import ConfirmRoom from "../pages/ConfirmRoom";
import ConfirmRestauran from "../pages/ConfirmRestauran";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import RoomReservation from "../pages/RoomReservation";
import RestauranReservation from "../pages/RestauranReservation";
import Rooms from "../pages/Rooms";
import Restauran from "../pages/Restauran";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/restauran",
        element: <Restauran />,
      },
      {
        path: "/roomReservation",
        element: <RoomReservation />,
      },
      {
        path: "/restauranReservation",
        element: <RestauranReservation />,
      },
      {
        path: "/checkoutroom",
        element: <CheckoutRoom />,
      },
      {
        path: "/checkoutrestauran",
        element: <CheckoutRestaurn />,
      },
      {
        path: "/confirmroom",
        element: <ConfirmRoom />,
      },
      {
        path: "/confirmrestauran",
        element: <ConfirmRestauran />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

export default routes;
