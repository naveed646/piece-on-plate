import React from 'react'
import {
  FaHeart,
  FaUtensils,
  FaCalendarAlt,
  FaHistory,
  FaGift,
} from "react-icons/fa";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { TfiAlignJustify } from "react-icons/tfi";
import { user } from './data/userprofile&tabledata';

function Sidebar() {
 const [showReservation, setShowReservation] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
    <div className="flex flex-1">
          <aside
            className={`h-screen bg-blue-500 border border-black text-white absolute top-18 left-0 shadow-md p-4 transition-all 
              duration-300 ${
              collapsed ? "w-20" : "w-60"
            }`}
          >
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="absolute right-0 top-0 text-2xl cursor-pointer"
            >
              {collapsed ? <TfiAlignJustify className="text-xl mr-8 font-bold"/> : <TiDeleteOutline />}
            </button>

            {/* Sidebar Title */}
            {!collapsed && (
              <h1 className="text-white font-bold mt-4 text-center">
                Booking & Reservation
              </h1>
            )}

            {/* Navigation */}
            <nav className="space-y-2 mt-5">
              <button className="flex items-center gap-2 cursor-pointer w-full text-left p-2 rounded hover:bg-zinc-600">
                <FaUtensils className="text-2xl" />
                {!collapsed && "Book a Table"}
              </button>

              <button
                onClick={() => setShowReservation(!showReservation)}
                className="flex items-center gap-2 cursor-pointer w-full text-left p-2 rounded hover:bg-zinc-600"
              >
                <FaCalendarAlt className="text-2xl" />
                {!collapsed && "Reservations"}
              </button>

              {/* <button className="flex items-center gap-2 cursor-pointer w-full text-left p-2 rounded hover:bg-zinc-600">
                <FaHeart className="text-2xl" />
                {!collapsed && "Favorites"}
              </button> */}

              <button className="flex items-center gap-2 cursor-pointer w-full text-left p-2 rounded hover:bg-zinc-600">
                <FaGift className="text-2xl" />
                {!collapsed && "Offers"}
              </button>
            </nav>
          </aside>
        </div>

      

        {/* table  */}
        {showReservation && (
          <div className="bg-white p-6 rounded-xl left-100 absolute shadow-md col-span-2">
            <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
              <FaHistory /> Upcoming Reservation
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2">Table No</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Time</th>
                  <th className="p-2">Day</th>
                  <th className="p-2">Duration</th>
                  <th className="p-2">No. of Guests</th>
                  <th className="p-2 text-center ">Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.recentTable.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{order.table}</td>
                    <td className="p-2">{order.date}</td>
                    <td className="p-2">{order.time}</td>
                    <td className="p-2">{order.day}</td>
                    <td className="p-2">{order.duaration}</td>
                    <td className="p-2 text-center">{order.people}</td>
                    <td>
                      <button className="bg-orange-500 text-white px-3 py-1 rounded mr-2 hover:bg-amber-600">
                        Cancel
                      </button>
                      <button className="bg-zinc-600 text-white px-3 py-1 rounded hover:bg-zinc-700">
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>
  )
}

export default Sidebar