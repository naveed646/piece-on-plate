// import React from "react";
import {useNavigate, NavLink } from "react-router-dom";
import { data } from "./restApi.json";
import logo from '../../assets/logo.jpg'

function Navbar() {
  const navigate = useNavigate();

  return (

  
    <div className="w-100% bg-zinc-800 border-b border-gray-200">
      <nav className="max-w-5xl mx-10 mt-8 py-2 flex items-center justify-between">
       <div className="flex justify-center items-center gap-2 "> <img className="h-12 object-fill w-auto rounded-full" src={logo} alt="logoo" />
        <h1 className="text-white ">קเєςє ๏ภ קlคtє</h1></div>
        <ul className="flex gap-8 font-b text-white">
          { data.navbarLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `hover:underline underline-offset-4 ${
                    isActive ? "text-zinc-400" : ""
                  }`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-2.5 text-white font-semibold"
          >
            Sign up
          </button>
          <button className="px-6 py-2.5 font-semibold text-white bg-[#4A3BFF] rounded-md hover:shadow-lg transition duration-200">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
