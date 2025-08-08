import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../../utils";
import registerImg from '../../assets/registerImg.jpg';

function Singup() {
  const navigate = useNavigate();
  const [singnUpInfo, setSingnUpInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSingnUpInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitt = async (e) => {
    e.preventDefault();
    const { name, email, password } = singnUpInfo;
    if (!name || !email || !password) {
      handleError("name email and password  are required");
      return;
    }

    try {
      const url = "http://localhost:5000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(singnUpInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        handleError(error);
      } else if (!message) {
        handleError("Something went wrong");
      }
    } catch (err) {
      handleError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-between min-h-screen bg-gradient-to-tr from-zinc-800 to-pink-200">
      <div
  className="h-screen w-full bg-cover bg-center rounded-r-2xl flex items-center justify-center"
  style={{ backgroundImage: `url(${registerImg})` }}
>
  <div className="text-black text-center max-w-xl bg-gradient-to-tr from-zinc-800 to-green-200 opacity-90 p-6 rounded">
    <h1 className="font-bold text-3xl mb-4">קเєςє ๏ภ קlคtє</h1>
    <p className="font-semibold">
      At Piece on Plate, we believe food is more than just nourishment 
      it's an experience. Our restaurant blends comforting flavors with
      creative presentation, offering a curated menu of dishes crafted from
      fresh, locally sourced ingredients. Whether you're here for a casual
      meal or a special occasion, we serve every plate with passion, style,
      and a pinch of perfection. Indulge in a dining journey where every
      piece on your plate is a piece of art.
    </p>
  </div>
</div>

      <div className=" bg-gradient-to-tr from-zinc-900 to-cyan-600 text-white p-6 mr-10 ml-10 rounded-xl h-120 shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center mb-6">Sign Up</h1>
        <form onSubmit={handleSubmitt} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-base font-medium">Name</label>
            <input
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name..."
              value={singnUpInfo.name}
              onChange={handleInput}
              className="text-lg px-3 py-2 border-b border-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={singnUpInfo.email}
              onChange={handleInput}
              className="text-lg px-3 py-2 border-b border-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-base font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={singnUpInfo.password}
              onChange={handleInput}
              className="text-lg px-3 py-2 border-b border-gray-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 cursor-pointer text-white font-semibold mx-20 py-4 rounded-full hover:bg-orange-800 transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Singup;
