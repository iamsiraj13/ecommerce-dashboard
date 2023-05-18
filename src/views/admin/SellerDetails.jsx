import React from "react";

const SellerDetails = () => {
  return (
    <div>
      <div className="px-2 lg:px-7 pt-5">
        <div className="w-full p-4  bg-white shadow-md rounded-md">
          <div className="w-full flex flex-wrap text-black">
            <div className="w-3/12 flex justify-center items-center py-3">
              <div>
                <img
                  className="w-full h-[230px]"
                  src="https://as2.ftcdn.net/v2/jpg/01/24/30/67/1000_F_124306753_5lrF4qCOZLL2wFsyFfaJf6FprTTtcvnX.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-4/12">
              <div className="px-0 md:px-5 py-2">
                <div className="py-2 text-lg">
                  <h2>Basic Info</h2>
                </div>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 shadow-md bg-sky rounded-md">
                  <div className="flex gap-2">
                    <span className="font-semibold ">Name : </span>
                    <span>Sheikh farid</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold ">Email : </span>
                    <span>farid@gamil.com</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold ">Role : </span>
                    <span>Seller</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold ">Status : </span>
                    <span>Pending</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold ">Payment Account : </span>
                    <span>active</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="px-0 md:px-5 py-2">
                <div className="py-2 text-lg">
                  <h2>Address</h2>
                </div>
                <div className="flex justify-between text-sm flex-col gap-2 p-4 shadow-md bg-sky rounded-md">
                  <div className="flex gap-2">
                    <span className="font-semibold">Shop Name : </span>
                    <span>Farid Store</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">Division : </span>
                    <span>Rangpur</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">District : </span>
                    <span>Kurigram</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold">Sub-District : </span>
                    <span>Nageshawri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className="flex gap-4 py-3">
                <select
                  className="px-4 py-2 focus:border-indigo-500 outline-none bg-sky border border-slate-700 rounded-md text-black"
                  name=""
                  id=""
                >
                  <option value="">--select status--</option>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>
                <button className="bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 w-[170px] ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
