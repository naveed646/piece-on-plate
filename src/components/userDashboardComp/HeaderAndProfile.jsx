import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { user } from "./data/userprofile&tabledata";

function HeaderAndProfile({ toggleSidebar }) {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }
    if (showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-tr from-zinc-800 to-orange-200 text-white py-2 px-4 flex justify-between items-center shadow-lg">
        {/* Left: Sidebar toggle (mobile) + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="sm:hidden text-2xl text-white"
          >
            ☰
          </button>
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            🍽 Piece on Plate
          </h1>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-2">
          <button
            className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer text-zinc-800 hover:bg-zinc-200 rounded-xl"
            onClick={() => setShowProfile(!showProfile)}
          >
            <FaUserCircle /> Profile
          </button>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base cursor-pointer text-zinc-800 hover:bg-zinc-200 rounded-xl "
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      {/* Profile dropdown */}
      {showProfile && (
        <div
          ref={profileRef}
          className="absolute right-4 top-16 w-64 sm:w-72 bg-gray-200 z-30 p-6 rounded-xl shadow-md flex flex-col items-center text-center"
        >
          <FaUserCircle className="text-6xl text-orange-600 mb-4" />
          <h2 className="text-lg sm:text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500 text-sm sm:text-base">{user.email}</p>
          <div className="bg-orange-100 text-orange-700 mt-4 px-4 py-2 rounded-full text-sm sm:text-base">
            Loyalty Points: <strong>{user.loyaltyPoints}</strong>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderAndProfile;
