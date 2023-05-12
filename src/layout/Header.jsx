import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ show, setShow }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
      <div className="bg-white px-4 py-3 ml-0 lg:ml-[260px] rounded-md flex justify-between transition-all items-center">
        <div className="flex lg:hidden">
          <button onClick={() => setShow(!show)}>
            <AiOutlineMenu />
          </button>
        </div>
        <div className="hidden md:block">
          <form>
            <input
              type="text"
              placeholder="Search"
              className="outline-none px-3 py-2 focus:border-indigo-700 rounded-md border border-indigo-500"
            />
          </form>
        </div>
        <div className="flex gap-3">
          <div className=" flex justify-end flex-col">
            <h3 className="capitalize text-black font-semibold font-inter">
              sirajul islam
            </h3>
            <span className="capitalize text-right text-black text-[14px] font-inter">
              developer
            </span>
          </div>
          <div className="w-[45px] h-[45px] rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
