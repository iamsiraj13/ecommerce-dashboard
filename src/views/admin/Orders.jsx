import React, { useState } from "react";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  return (
    <div className="pt-5 px-2 lg:px-7">
      <div className="w-full bg-white rounded-md p-4">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-1 border border-slate-600 rounded-md hover:border-indigo-600 outline-none text-black"
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-1 border border-slate-600 rounded-md focus:border-indigo-600 outline-none text-black"
          />
        </div>
        <div>
          <h2>Orders pages</h2>
        </div>
      </div>
    </div>
  );
};

export default Orders;
