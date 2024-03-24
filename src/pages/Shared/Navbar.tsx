/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toast } from "sonner";

export const NavBar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    const toastId = toast.loading("loading...");
    dispatch(logout());
    toast.success("Logged out", { id: toastId, duration: 2000 });
  };

  return (
    <nav className="flex items-center justify-between bg-[#f4f3f3] px-4 py-2 text-white ">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-2xl font-semibold text-black transition-all duration-200 hover:scale-110">
        <Link to="/">
          <h2 className="text-indigo-700 font-bold">Health Medi</h2>
        </Link>
      </div>
      <ul className="hidden items-center justify-between gap-10 md:flex text-black">
        <li className="group flex  cursor-pointer flex-col">
          <Link to="/"> Home</Link>
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
          <Link to="/supplies">Supplies</Link>
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        {user && (
          <li className="group flex  cursor-pointer flex-col">
            <Link to="/dashboard">Dashboard</Link>
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        )}
        <li className="group flex  cursor-pointer flex-col">
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
            {user ? (
              <Link onClick={handleLogout} to="/login">
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </button>
        </li>
      </ul>
      <div className="relative flex transition-transform md:hidden">
        <FaBars
          onClick={() => setDropDownState(!dropDownState)}
          className="text-black text-2xl"
        />
        {dropDownState && (
          <ul className="  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base z-50">
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600">
              <Link to="/supplies">Supplies</Link>
            </li>
            {user && (
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600">
              <button className="bg-sky-800 px-4 py-2 rounded-md">
                {user ? (
                  <Link onClick={handleLogout} to="/login">
                    Logout
                  </Link>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
