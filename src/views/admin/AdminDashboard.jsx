import React from "react";
import { AiFillAccountBook, AiOutlineDollarCircle } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import BarChart from "../../components/Dashboard/Charts/BarChart";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="px-2 lg:px-7 py-5">
      {/*----------- dashboard top card ------------ */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {/* card item  */}
        <div className="flex justify-between items-center p-4 rounded-md shadow-md bg-white">
          <div>
            <span className="text-violet-600 text-2xl font-medium font-inter">
              $1,252
            </span>
            <h2 className="text-black capitalize text-md font-medium font-inter">
              total
            </h2>
          </div>
          <div>
            <span className="text-3xl text-violet-600">
              <AiOutlineDollarCircle />
            </span>
          </div>
        </div>
        {/* card item  */}
        <div className="flex justify-between items-center p-4 rounded-md shadow-md bg-white">
          <div>
            <span className="text-purple-600 text-2xl font-medium font-inter">
              252
            </span>
            <h2 className="text-black capitalize text-md font-medium font-inter">
              products
            </h2>
          </div>
          <div>
            <span className="text-purple-600 text-3xl">
              <FaProductHunt />
            </span>
          </div>
        </div>
        {/* card item  */}
        <div className="flex justify-between items-center p-4 rounded-md shadow-md bg-white">
          <div>
            <span className="text-blue-600 text-2xl font-medium font-inter">
              52
            </span>
            <h2 className="text-black capitalize text-md font-medium font-inter">
              sellers
            </h2>
          </div>
          <div>
            <span className="text-3xl text-blue-600">
              <FiUsers />
            </span>
          </div>
        </div>
        {/* card item  */}
        <div className="flex justify-between items-center p-4 rounded-md shadow-md bg-white">
          <div>
            <span className="text-fuchsia-600 text-2xl font-medium font-inter">
              252
            </span>
            <h2 className="text-black capitalize text-md font-medium font-inter">
              orders
            </h2>
          </div>
          <div>
            <span className="text-fuchsia-600 text-3xl">
              <AiFillAccountBook />
            </span>
          </div>
        </div>
      </div>

      {/* dashboard chart  */}
      <div className="w-full flex flex-wrap mt-5 gap-4">
        {/* chart  */}
        <div className="w-full lg:w-7/12 lg:pr-2 bg-white rounded-md shadow-md">
          {" "}
          <BarChart />{" "}
        </div>
        {/* recent seller message  */}
        <div className="w-full lg:w-4/12  p-4 bg-white rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="capitalize">recent seller message</h2>
            <Link className="capitalize">view all</Link>
          </div>
          {/* chat message  */}
          <div className="flex flex-col gap-2 pt-5 bg-transparent">
            <ol>
              <li className="relative flex ml-6">
                <div className=" w-[30px] h-[30px] rounded-full">
                  <img
                    src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <Link>admin</Link>
                  <p>1m ago</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
