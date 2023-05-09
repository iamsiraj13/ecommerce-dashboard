import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader, PulseLoader } from "react-spinners";
import { admin_login, clearMessage } from "../../store/Reducers/authReducer";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessage());
      navigate("/");
    }
  }, [errorMessage, successMessage]);
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] bg-[#283046] text-[#d0d2d6] p-4 rounded-md">
        <h2 className="text-xl mb-3 capitalize">Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-1 mb-3">
            <label htmlFor="email" className="capitalize">
              email
            </label>
            <input
              onChange={handleInput}
              value={state.email}
              className="px-3
               py-2 outline-none 
               text-black
               bg-white
               border   
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
               text-black
               bg-white
               border  
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

          {loader === true ? (
            <>
              {" "}
              <button
                disabled={true}
                type="submit"
                className="capitalize bg-slate-400 w-full hover:shadow-blue500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
              >
                <PulseLoader />
              </button>
            </>
          ) : (
            <>
              <button
                type="submit"
                className="capitalize bg-blue-500 w-full hover:shadow-blue500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
              >
                sign in
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
