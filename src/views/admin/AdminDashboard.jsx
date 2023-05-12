import React from "react";
import { AiFillAccountBook, AiOutlineDollarCircle } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import BarChart from "../../components/Dashboard/Charts/BarChart";

const AdminDashboard = () => {
  return (
    <div className="px-2 lg:px-7 py-5">
      {/*----------- dashboard top card ------------ */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {/* card item  */}
        <div className="flex justify-between items-center p-4 rounded-md shadow-md bg-white">
          <div>
            <h2 className="text-black capitalize text-2xl font-medium font-inter">
              total
            </h2>
            <span className="text-violet-600 text-md font-medium font-inter">
              $1,252
            </span>
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
            <h2 className="text-black capitalize text-2xl font-medium font-inter">
              products
            </h2>
            <span className="text-purple-600 text-md font-medium font-inter">
              252
            </span>
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
            <h2 className="text-black capitalize text-2xl font-medium font-inter">
              sellers
            </h2>
            <span className="text-blue-600 text-md font-medium font-inter">
              52
            </span>
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
            <h2 className="text-black capitalize text-2xl font-medium font-inter">
              orders
            </h2>
            <span className="text-fuchsia-600 text-md font-medium font-inter">
              252
            </span>
          </div>
          <div>
            <span className="text-fuchsia-600 text-3xl">
              <AiFillAccountBook />
            </span>
          </div>
        </div>
      </div>

      {/* dashboard chart  */}
      <div>
        <div>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
