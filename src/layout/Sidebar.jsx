import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNavs } from "../navigation";
import { AiOutlineCloseCircle, AiOutlineLogin } from "react-icons/ai";

const Sidebar = ({ show, setShow }) => {
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNavs("admin");
    setAllNav(navs);
  }, []);

  return (
    <div>
      <div
        className={`w-[260px] bg-white shadow-md fixed top-0 left-0 h-screen  z-50 transition-all ${
          show ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        {/*============ sidebar logo ======== */}
        <Link to="/" className="h-[70px] flex justify-center items-center">
          <h3 className="text-black text-lg font-inter font-bold">LOGO</h3>
        </Link>
        <div className="absolute top-5 right-5">
          <button onClick={() => setShow(false)} className="text-[20px]">
            <AiOutlineCloseCircle />
          </button>
        </div>

        {/* all navs  */}
        <div className="px-4">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathname.toString() === n.path
                      ? "capitalize text-black bg-sky-blue flex gap-2 items-center shadow-md rounded px-2 py-1"
                      : "capitalize text-black   flex gap-2 items-center mt-3 px-2 py-1 transition-all duration-500 hover:bg-sky-blue font-inter"
                  }`}
                >
                  <span className="text-black">{n.icon}</span>
                  <span className="font-inter">{n.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="capitalize text-black   flex gap-2 items-center mt-3 px-2 py-1 transition-all duration-500 hover:bg-sky-blue w-full font-inter">
                <span>
                  <AiOutlineLogin />
                </span>
                <span>logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
