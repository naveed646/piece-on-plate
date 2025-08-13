import {
  FaUtensils,
  FaCalendarAlt,
  FaGift,
} from "react-icons/fa";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { TfiAlignJustify } from "react-icons/tfi";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Sidebar({ open, setOpen }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed sm:static top-0 left-0 h-full bg-gradient-to-tr from-zinc-800 to-orange-200 text-white 
      transition-transform duration-300 shadow-md p-4
      ${open ? "translate-x-0" : "-translate-x-full"} 
      sm:translate-x-0 ${collapsed ? "w-20" : "w-60"}`}
    >
      {/* for mobile.... */}
      <button
        onClick={() => setOpen(false)}
        className="sm:hidden absolute right-3 top-3 text-white text-2xl"
      >
        <TiDeleteOutline />
      </button>

      {/* for desktop.... */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden sm:block absolute right-0 top-0 text-black p-1"
      >
        {collapsed ? (
          <TfiAlignJustify className="text-xl mr-7" />
        ) : (
          <TiDeleteOutline className="text-xl" />
        )}
      </button>

      {/* Sidebar Title */}
      {!collapsed && (
        <h1 className="text-white font-bold mt-8 sm:mt-4 text-center">
          Booking & Reservation
        </h1>
      )}

      {/* Navigation */}
      <nav className="space-y-2 mt-5">
        <NavLink
          to="/dashboard"
          className="flex items-center gap-2 cursor-pointer w-full text-left p-2 rounded hover:bg-zinc-600"
        >
          <RxDashboard className="text-2xl" />
          {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink
          to="table"
          className="flex items-center gap-2 cursor-pointer w-full text-left p-2 rounded hover:bg-zinc-600"
        >
          <FaUtensils className="text-2xl" />
          {!collapsed && "Book a Table"}
        </NavLink>

        <NavLink
          to="reservation"
          className="flex items-center gap-2 cursor-pointer w-full text-left p-2 rounded hover:bg-zinc-600"
        >
          <FaCalendarAlt className="text-2xl" />
          {!collapsed && "Reservations"}
        </NavLink>

        <NavLink
          to="offer"
          className="flex items-center gap-2 cursor-pointer w-full text-left p-2 rounded hover:bg-zinc-600"
        >
          <FaGift className="text-2xl" />
          {!collapsed && "Offers"}
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
