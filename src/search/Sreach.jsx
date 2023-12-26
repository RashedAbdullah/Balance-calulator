import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { blogCategories } from "../blogData/BlogCategories";

const Sreach = () => {

  return (
    <div>
      <div className="bg-green-700 p-20">
        <div className="  flex justify-center align-middle">
          <form>
            <div className=" lg:w-96 h-10 flex justify-center align-middle bg-white py-1 px-5 rounded-full">
              <input
              placeholder="What you want to read?"
                className=" text-lg lg:w-full outline-none text-black"
                type="text"
              />{" "}
              <button className=" hover:text-green-700 transition">
                <IoSearchSharp size="25px" />
              </button>
            </div>
          </form>
        </div>
        <div className="text-white flex justify-center flex-wrap mt-10">
          {blogCategories.map((category) => (
            <div key={category.id}>
              <div>
                <button className="bg-green-800 hover:bg-green-900 transition duration-300 px-5 py-1 m-2 rounded-full">{category.category}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sreach;
