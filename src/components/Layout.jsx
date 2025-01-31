import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const user = "";
  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Sidebar for desktop view */}
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        {/* <Sidebar /> */}
      </div>

      {/* <MobileSidebar /> */}

      <div className="flex-1 overflow-y-auto">
        {/* <Navbar /> */}
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Layout;
