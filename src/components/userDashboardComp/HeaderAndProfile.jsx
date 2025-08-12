import {  FaUserCircle} from "react-icons/fa";
import { useNavigate} from "react-router-dom";
import { useState } from 'react';
import { FaSignOutAlt} from 'react-icons/fa'
import { user } from './data/userprofile&tabledata'

function HeaderAndProfile() {
const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <>
     {/* Header.... */}
      <header className="bg-red-400 text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold tracking-wide">🍽 Piece on Plate</h1>
        <button
          className="flex cursor-pointer items-center border-1 border-red-400 rounded-xl p-1 hover:bg-zinc-700 font-bold text-xl gap-1 absolute right-38"
          onClick={() => setShowProfile(!showProfile)}
        >
          <FaUserCircle /> Profile
        </button>
        <button
          onClick={() => navigate("/login")}
          className="flex cursor-pointer items-center gap-2 bg-orange-800 hover:bg-orange-700 px-4 py-2 rounded-lg"
        >
          <FaSignOutAlt /> Logout
        </button>
      </header>
  {/* Profile...... */}
        {showProfile && (
          <div className="bg-gray-200 p-6 absolute right-25 top-17 w-65 h-70 rounded-xl ml-10 shadow-md col-span-1 flex flex-col items-center text-center">
            <FaUserCircle className="text-6xl text-orange-600 mb-4" />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
            <div className="bg-orange-100 text-orange-700 mt-4 px-4 py-2 rounded-full">
              Loyalty Points: <strong>{user.loyaltyPoints}</strong>
            </div>
          </div>
        )}

    </>
  )
}

export default HeaderAndProfile