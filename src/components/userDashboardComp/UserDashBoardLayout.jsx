import React, { useState } from "react";
import HeaderAndProfile from "./HeaderAndProfile";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function UserDashBoardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <HeaderAndProfile toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        <main className="flex-1 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default UserDashBoardLayout;
