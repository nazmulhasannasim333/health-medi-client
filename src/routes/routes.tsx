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
import ProtectedRoute from "./ProtectedRoute";
import Leaderboard from "../component/Leaderboard/Leaderboard";
import Volunteer from "../component/Volunteer/Volunteer";
import Community from "../component/Community/Community";
import AboutUs from "../component/AboutUs/AboutUs";
import Review from "../component/Dashboard/Review";

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
        path: "/leaderboard",
        element: (
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/volunteer",
        element: (
          <ProtectedRoute>
            <Volunteer />
          </ProtectedRoute>
        ),
      },
      {
        path: "/community",
        element: (
          <ProtectedRoute>
            <Community />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about-us",
        element: (
          <ProtectedRoute>
            <AboutUs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: (
          <ProtectedRoute>
            <Leaderboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/supplies/:id",
        element: <SupplyDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: (
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        ),
      },
      {
        path: "supplies",
        element: (
          <ProtectedRoute>
            <AllSupplies />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-supply",
        element: (
          <ProtectedRoute>
            <AddSupply />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-testimonial",
        element: (
          <ProtectedRoute>
            <Review />
          </ProtectedRoute>
        ),
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
