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
      <div className="w-full flex flex-wrap  gap-4 mt-5  ">
        {/* chart  */}
        <div className="w-full lg:w-6/12 lg:pr-2 bg-white rounded-md shadow-md">
          {" "}
          <BarChart />{" "}
        </div>
        {/* recent seller message  */}
        <div className="w-full lg:w-5/12  p-4  bg-white rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="capitalize">recent seller message</h2>
            <Link className="capitalize">view all</Link>
          </div>
          {/* chat message  */}
          <div className="flex flex-col pt-5 bg-transparent">
            <ol className="relative border-1 border-slate-600 ml-6">
              <li className=" mb-3 ml-6">
                <div className="absolute -left-5 top-0 flex  w-10 h-10 rounded-full items-center">
                  <img
                    src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                </div>
                <div className="p-3 bg-slate-600 rounded-lg border border-slate-600 ">
                  <div className="flex justify-between items-center mb-2">
                    <Link className="text-md font-inter capitalize text-white">
                      admin
                    </Link>
                    <p className="font-inter text-white text-sm">1m ago</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">how are you</div>
                </div>
              </li>

              <li className=" mb-3 ml-6">
                <div className="absolute -left-5 top-0 flex  w-10 h-10 rounded-full items-center">
                  <img
                    src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
                    className="w-full h-full object-cover rounded-full"
                    alt=""
                  />
                </div>
                <div className="p-3 bg-slate-600 rounded-lg border border-slate-600 ">
                  <div className="flex justify-between items-center mb-2">
                    <Link className="text-md font-inter capitalize text-white">
                      admin
                    </Link>
                    <p className="font-inter text-white text-sm">1m ago</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">how are you</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* recent order table  */}
      <div className="w-full p-4 bg-white rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-lg text-black pb-3 capitalize">
            recent orders
          </h5>
          <Link className="capitalize font-semibold text-sm text-black">
            view all
          </Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-black-l">
            <thead className="text-sm text-black-l uppercase border-b border-slate-600">
              <tr>
                <th scope="col" className="py-3 px-4 capitalize">
                  order id
                </th>
                <th scope="col" className="py-3 px-4 capitalize">
                  price
                </th>
                <th scope="col" className="py-3 px-4 capitalize">
                  payment status
                </th>
                <th scope="col" className="py-3 px-4 capitalize">
                  order status
                </th>
                <th scope="col" className="py-3 px-4 capitalize">
                  active
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium capitalize whitespace-nowrap"
                >
                  #1254654
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium capitalize whitespace-nowrap"
                >
                  $2000
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium capitalize whitespace-nowrap"
                >
                  paid
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium capitalize whitespace-nowrap"
                >
                  progress
                </td>
                <td
                  scope="row"
                  className="py-4 px-6 font-medium capitalize whitespace-nowrap"
                >
                  inactive
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
