import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="mx-auto text-center py-6 bg-gray-900 text-white ">
      <div className="flex justify-center cursor-pointer p-2">
        <NavLink to="/">
          <img
            className="rounded-full h-10 w-10 border border-white "
            src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/404391919_3445113009112118_2309358618049763158_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEkV8V6P2zhuTcGvnYKqfdrDL-N7yic0iAMv43vKJzSIL3ADUp2KExVMCfOgBtwmCUVztkihvB3KkosG3hXZ-xb&_nc_ohc=alogO0arwoMAX-wfjEs&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAZ1RIYtUsoO6RL3zF15zufXlvxTFc9knKkyfYjxf0I5g&oe=658E6AE5"
            alt=""
          />
        </NavLink>
      </div>
      <div className="max-[600px]:hidden min-[600px]:flex lg:gap-20 justify-center p-2">
        <NavLink className="p-2 rounded-lg" to="/blog">
          Blogs
        </NavLink>
        <NavLink className="p-2 rounded-lg" to="/project">
          Projects
        </NavLink>
        <NavLink className="p-2 rounded-lg" to="/users">
          Users
        </NavLink>
        <NavLink className="p-2 rounded-lg" to="/contact">
          Contact
        </NavLink>
        <NavLink className="p-2 rounded-lg" to="/about">
          About
        </NavLink>
      </div>
      <ul className=" flex justify-center gap-8 text-2xl text-gray-500">
        <li>
          <a className="cursor-pointer" target="_blank" href="https://www.facebook.com/Rashed4Abdullah">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a className="cursor-pointer" target="_blank" href="https://www.instagram.com/Rashed4Abdullah">
            <RiInstagramFill />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@Ahlam_Sub">
            <IoLogoYoutube />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/RashedAbdullah">
            <FaGithub />
          </a>
        </li>
      </ul>
      <div className="pt-5 text-gray-600">
        <p className="text-sm">All Right Reserdev by Rashed Abdullah</p>
      </div>
    </nav>
  );
};

export default Footer;
