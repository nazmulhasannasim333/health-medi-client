import { NavBar } from "../pages/Shared/Navbar.jsx";
import Footer from "../pages/Shared/Footer.js";
import { Outlet, ScrollRestoration } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
