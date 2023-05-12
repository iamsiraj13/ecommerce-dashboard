import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-sky min-h-screen w-full">
      <div className="">
        <Header show={show} setShow={setShow} />
      </div>
      <div>
        <Sidebar show={show} setShow={setShow} />
      </div>
      <main className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
