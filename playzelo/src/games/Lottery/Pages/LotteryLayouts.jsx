import React from "react";
import Navbar from "../LotteryComponents/Navbar";
import NewsTicker from "../LotteryComponents/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-900">
      {/* Navbar */}
      <Navbar />

      {/* NewsTicker */}
      <NewsTicker />

      {/* Dynamic Page Content */}
      <main className="flex-1 p-6">
        {/* The active route's component will render here */}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
