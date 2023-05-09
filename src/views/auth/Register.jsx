import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] bg-[#283046] text-[#d0d2d6] p-4 rounded-md">
        <h2 className="text-xl mb-3 capitalize">welcome to ecommerce</h2>
        <p className="text-sm mb-3 capitalize">
          please register to your account and start your bussiness
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="name" className="capitalize">
              name
            </label>
            <input
              onChange={handleInput}
              value={state.name}
              className="px-3
               py-2 outline-none 
               border text-[#d0d2d6]
                border-slate-700 bg-transparent
                 rounded-md
                 focus:border-indigo-500 overflow-hidden
                 "
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="email" className="capitalize">
              email
            </label>
            <input
              onChange={handleInput}
              value={state.email}
              className="px-3
               py-2 outline-none 
               border text-[#d0d2d6]
                border-slate-700 bg-transparent
                 rounded-md
                 focus:border-indigo-500 overflow-hidden
                 "
              type="text"
              name="email"
              placeholder="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="password" className="capitalize">
              password
            </label>
            <input
              onChange={handleInput}
              value={state.password}
              className="px-3
               py-2 outline-none 
               border text-[#d0d2d6]
                border-slate-700 bg-transparent
                 rounded-md
                 focus:border-indigo-500 overflow-hidden
                 "
              type="text"
              name="password"
              placeholder="password"
              id="password"
              required
            />
          </div>
          <div className="flex w-full gap-3 mb-3 items-center">
            <input
              className="w-3 h-4 text-blue-500 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
              type="checkbox"
              name="checkbox"
              id="checkbox"
              required
            />
            <label htmlFor="checkbox" className="capitalize">
              i agree to privacy policy and terms
            </label>
          </div>
          <button
            type="submit"
            className="capitalize bg-blue-500 w-full hover:shadow-blue500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
          >
            sign up
          </button>
          <div className="flex items-center mb-3 gap-3 justify-center">
            <p className="capitalize">
              allready have an account ? <Link to="/login">sing in here</Link>
            </p>
          </div>
          <div className="w-full flex gap-2 justify-center items-center mb-3 ">
            <div className="w-[44%] bg-slate-500 h-[1px]"></div>
            <div className="w-[10%]">
              <span className="uppercase pb-1">or</span>
            </div>
            <div className="w-[44%] bg-slate-500 h-[1px]"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
