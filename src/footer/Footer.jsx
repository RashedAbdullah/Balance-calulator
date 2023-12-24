import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
        <nav className='mx-auto text-center py-12 bg-gray-800 text-white '>
            <div className='flex justify-center cursor-pointer p-5'>
              <img className='rounded-full h-10 w-10' src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/404391919_3445113009112118_2309358618049763158_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEkV8V6P2zhuTcGvnYKqfdrDL-N7yic0iAMv43vKJzSIL3ADUp2KExVMCfOgBtwmCUVztkihvB3KkosG3hXZ-xb&_nc_ohc=5sTKhzU-EToAX9GDJ1G&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAWU1zVzFe-mWZEiqTwqBnqXW7YbIqise_jfFqo3401Ng&oe=65887C25" alt="" />
            </div>
            <div className='flex gap-10 justify-center p-2'>
                <NavLink className="p-2 rounded-lg" to="/">Home</NavLink>
                <NavLink className="p-2 rounded-lg" to="/contact">Contact</NavLink>
                <NavLink className="p-2 rounded-lg" to="/about">About</NavLink>
                <NavLink className="p-2 rounded-lg" to="/users">Users</NavLink>
            </div>
            <ul className=' flex justify-center gap-12 p-2 text-2xl text-gray-500'>
              <li><a className='cursor-pointer' href=""><FaFacebook /></a></li>
              <li><a className='cursor-pointer' href=""><RiInstagramFill /></a></li>
              <li><a href=""><IoLogoYoutube /></a></li>
              <li><a href=""><FaGithub /></a></li>
            </ul>
            <div className='pt-5 text-gray-600'>
              <p>All Right Reserdev by Rashed Abdullah</p>
            </div>
        </nav>
  )
}

export default Footer;