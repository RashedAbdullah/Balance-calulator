import React, { useState } from "react";
import Sreach from "../search/Sreach";
import { blogCategories } from "../blogData/BlogCategories";
import { PiTimerBold } from "react-icons/pi";

const Blogs = () => {
  const [filteredVlogs, setFilteredBlogs] = useState([]);
  const [isAllBlogs, setIsAllBlogs] = useState(true);

  const handleSingleBlog = (id) => {
    console.log(id);
  };
  return (
    <div className=" bg-gray-200">
      <Sreach
        setFilteredBlogs={setFilteredBlogs}
        setIsAllBlogs={setIsAllBlogs}
        isAllBlogs={isAllBlogs}
      />
      <div className="p-5">
        {isAllBlogs ? (
          <div className="grid lg:grid-cols-4 sm:grid-cols-2">
            {blogCategories.flatMap((category) =>
              category.text.flatMap((item) => (
                <div
                  onClick={() => handleSingleBlog(item.id)}
                  key={item.id}
                  className=" hover:scale-105 bg-white m-5 p-5 rounded cursor-pointer  transition duration-300"
                >
                  <h2 className="text-[25px]">{item.title}</h2>

                  <p className="mt-2 text-sm border-b-2 border-gray-300 mb-2">
                    {item.author}
                  </p>
                  <p className="mt-2">{item.para}</p>
                  <p className="mt-2 text-sm flex gap-2 p-0 m-0">
                    <PiTimerBold size="16px" /> {item.date}
                  </p>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 sm:grid-cols-2">
            {filteredVlogs.flatMap((item) => (
                <div
                  onClick={() => handleSingleBlog(item.id)}
                  key={item.id}
                  className=" hover:scale-105 bg-white m-5 p-5 rounded cursor-pointer  transition duration-300"
                >
                  <h2 className="text-[25px]">{item.title}</h2>

                  <p className="mt-2 text-sm border-b-2 border-gray-300 mb-2">
                    {item.author}
                  </p>
                  <p className="mt-2">{item.para}</p>
                  <p className="mt-2 text-sm flex gap-2 p-0 m-0">
                    <PiTimerBold size="16px" /> {item.date}
                  </p>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
