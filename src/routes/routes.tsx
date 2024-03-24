import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Supplies from "../component/Supplies/Supplies";
import SupplyDetails from "../component/SupplyDetails/SupplyDetails";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardHome from "../component/Dashboard/DashboardHome";
import AllSupplies from "../component/Dashboard/AllSupplies";
import AddSupply from "../component/Dashboard/AddSupply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/supplies",
        element: <Supplies />,
      },
      {
        path: "/supplies/:id",
        element: <SupplyDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "supplies",
        element: <AllSupplies />,
      },
      {
        path: "create-supply",
        element: <AddSupply />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
