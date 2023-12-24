import React, { Profiler, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { contextAPI } from "../layout/Layouts";
import { Example } from "./../menu/Examle";
import "../menu/styles.css";

const Header = () => {
  const [prfile, setProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { googleUser, setGoogleUser } = useContext(contextAPI);

  return (
    <div>
      <div className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                type="button"
                className=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div> */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className=" flex flex-shrink-0 items-center">
                <NavLink to="/" className="rounded-full">
                  <img
                    className="h-8 w-auto rounded-full"
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/404391919_3445113009112118_2309358618049763158_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEkV8V6P2zhuTcGvnYKqfdrDL-N7yic0iAMv43vKJzSIL3ADUp2KExVMCfOgBtwmCUVztkihvB3KkosG3hXZ-xb&_nc_ohc=5sTKhzU-EToAX9GDJ1G&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAWU1zVzFe-mWZEiqTwqBnqXW7YbIqise_jfFqo3401Ng&oe=65887C25"
                    alt="Your Company"
                  />
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className="hover:bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to="users"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Users
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div onClick={() => setProfile(!prfile)}>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/334524276_869978430773301_4660924608628999091_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeEb7TcgmuFHDOItClW0P-5XJs-cnjUtrG8mz5yeNS2sb2UI2lKROi0Icz8nv_qK4wZa4Sd39i8QCjscOaA18IsG&_nc_ohc=niJighRiokIAX8UkJzq&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAG6_IFymeFuKK38M28leMFlOobbSg-FstAKgMSzLgVOQ&oe=6588CF1D"
                      alt="User profile"
                    />
                  </button>
                </div>

                {prfile && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <NavLink
                      to="/signin"
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </NavLink>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* {openMenu && (
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/"
              className="hover:bg-gray-700 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setOpenMenu(false)}
              to="/users"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Users
            </NavLink>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
