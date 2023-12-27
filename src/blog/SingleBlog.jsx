import React from "react";
import { blogCategories } from "../blogData/BlogCategories";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineDateRange } from "react-icons/md";
import { GiFountainPen } from "react-icons/gi";
import { TbHomeMove } from "react-icons/tb";
import { IoCaretBackOutline } from "react-icons/io5";

const SingleBlog = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const filteredBlog = blogCategories.flatMap((category) =>
    category.text.flatMap((item) => item)
  );
  const filterdValue = filteredBlog
    .map((value) => value)
    .filter((item) => item.id === Number(blogId));

  return (
    <div className="">
      {filterdValue.map((blog) => (
        <div key={blog.id}>
          <div className=" ">
            <div className="bg-green-700 text-white p-[60px] sm:[p-50x]">
              <h2 className="lg:text-[60px] sm:text-[50px] lg:w-[70%] self-center">
                {blog.title}
              </h2>
              <div className="flex lg:gap-10 justify-end mt-10">
                <p className="flex gap-1">
                  <GiFountainPen /> {blog.author}
                </p>
                <p className="flex gap-2 ml-2">
                  <MdOutlineDateRange size="20px" /> {blog.date}
                </p>
              </div>
            </div>
            <div className="p-10">
              <div className="flex justify-between mb-5">
                <button
                  className="bg-green-700 rounded-full p-2 text-white sm:text-center"
                  onClick={() => navigate(-1)}
                >
                  <IoCaretBackOutline size="25px" />
                </button>
                <button
                  className="bg-green-700 rounded-full p-2 text-white"
                  onClick={() => navigate("/")}
                >
                  <TbHomeMove size="25px" />
                </button>
              </div>
              <p>
                {blog.para} {blog.para} {blog.para} {blog.para} {blog.para}
              </p>
              <p>
                {blog.para} {blog.para} {blog.para} {blog.para} {blog.para}
              </p>
              <p>
                {blog.para} {blog.para} {blog.para} {blog.para} {blog.para}
              </p>
              <p>
                {blog.para} {blog.para} {blog.para} {blog.para} {blog.para}
              </p>
              <p>
                {blog.para} {blog.para} {blog.para} {blog.para} {blog.para}
              </p>
              <p>
                {blog.para} {blog.para} {blog.para} {blog.para} {blog.para}
              </p>
              <p>
                {blog.para} {blog.para} {blog.para} {blog.para} {blog.para}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleBlog;
