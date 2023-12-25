import { Fragment, useContext, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { navigation } from "../blogData/blogData";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { allAuths } from "../config/firebase.config";
import { signOut } from "firebase/auth";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [user, loading, error] = useAuthState(allAuths);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const navigate = useNavigate();

  const signOutHandle = () => {
    setShowUserProfile(!showUserProfile);
    signOut(allAuths);
    navigate("/");
  };
  return (
    <div className="">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            
            {/* Transition from left site */}
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                onClick={() => setOpen(false)}
                className="relative flex max-w-xs flex-col overflow-y-auto bg-black text-white bg-opacity-80 pb-12 shadow-xl"
              >
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation?.categories?.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation?.categories?.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        {category?.sections?.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section?.items?.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.navlink}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6 text-center">
                  {navigation?.pages?.map((page) => (
                    <div key={page.name} className="flow-root">
                      <NavLink
                        to={page.navlink}
                        onClick={() => setOpen(false)}
                        className="-m-2 block p-2 font-medium text-white w-60 hover:bg-teal-950 transition "
                      >
                        {page.name}
                      </NavLink>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-indigo-900 text-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {!open && (
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              )}

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <NavLink to="/">
                  <span className="sr-only">Page logo</span>
                  <img
                    className="h-8 w-auto rounded-full"
                    src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/404391919_3445113009112118_2309358618049763158_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEkV8V6P2zhuTcGvnYKqfdrDL-N7yic0iAMv43vKJzSIL3ADUp2KExVMCfOgBtwmCUVztkihvB3KkosG3hXZ-xb&_nc_ohc=5QDprPfJQqkAX9DqSho&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAc-PmKa3zxxWGm5czJOaZZzaDdDupeUUxaqHaz9N6wLw&oe=658C70A5"
                    alt=""
                  />
                </NavLink>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-center">
                <div className="flex h-full space-x-8">
                  {navigation?.categories?.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex text-white">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-white"
                                  : "border-transparent text-white hover:text-gray-400",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="p-10 h-[100vh] relative bg-black text-white bg-opacity-80 flex justify-center gap-80">
                                {category?.featured && (
                                  <div className="mx-auto max-w-7xl px-8">
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                      {category?.sections?.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-white text-[25px]"
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                          >
                                            {section?.items?.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <a
                                                  href=""
                                                  className="hover:text-gray-800"
                                                >
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation?.pages?.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.navlink}
                      className="flex items-center text-sm font-medium text-white hover:text-gray-400"
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                {/* User profile or sign in page */}
                <div className="ml-4 flow-root lg:ml-6 justify-center">
                  {user ? (
                    <div
                      onClick={() => setShowUserProfile(!showUserProfile)}
                      className=" cursor-pointer flex align-middle "
                    >
                      <p className="mr-3 mt-2">{user?.displayName}</p>
                      <div>
                        <img
                          className="h-[35px] w-[35px] rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to="signin"
                      className="group -m-2 flex items-center p-2"
                    >
                      <FaUserCircle size="25px" />
                      <span className="sr-only">User profile</span>
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* User profile details */}
      {showUserProfile && (
        <div className=" bg-teal-800 text-white fixed right-1 top-12 p-2">
          <NavLink
            onClick={() => setShowUserProfile(!showUserProfile)}
            to="/userProfile"
          >
            <p className="p-2 pr-10 hover:bg-[rgb(9,86,86)] hover:text-white transition">
              Your Profile
            </p>
          </NavLink>

          <hr />
          <p
            onClick={signOutHandle}
            className="cursor-pointer p-2 pr-10 hover:bg-[rgb(9,86,86)] hover:text-white transition"
          >
            Sign out
          </p>
        </div>
      )}
    </div>
  );
}
