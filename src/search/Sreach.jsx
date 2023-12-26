import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { blogCategories } from "../blogData/BlogCategories";

const Sreach = ({ setFilteredBlogs, setIsAllBlogs, isAllBlogs }) => {
  const handleCategory = (index) => {
    const filteredCategories = blogCategories.filter(
      (category) => category.id === index
    );
    if (filteredCategories !== 1) {
      setFilteredBlogs(filteredCategories.flatMap((value) => value.text));
      setIsAllBlogs(false);
    } else {
      setIsAllBlogs(true);
    }
  };

  return (
    <div>
      <div className="">
        <div className="bg-green-700 p-20 flex justify-center align-middle">
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
        <div className=" text-green-900  flex justify-center flex-wrap mt-5">
          <button
            onClick={() => setIsAllBlogs(true)}
            className={
              isAllBlogs
                ? "border-gray-300 border bg-green-500 text-white hover:border-white transition duration-300 px-5 py-1 m-1 rounded-full"
                : "border-gray-300 border hover:bg-green-500 hover:text-white hover:border-white transition duration-300 px-5 py-1 m-1 rounded-full"
            }
          >
            All
          </button>
          {blogCategories.map((category) => (
            <div onClick={() => handleCategory(category.id)} key={category.id}>
              <div>
                <button className="border-gray-300 border hover:bg-green-500 hover:text-white hover:border-white transition duration-300 px-5 py-1 m-1 rounded-full">
                  {category.category}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sreach;
