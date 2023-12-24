import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import Contact from "./../pages/Contact";
import About from "./../pages/About";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import NotFound from "../notfound/NotFound";
import Layouts from "../layout/Layouts";
import Users from "../users/Users";
import UserDetails from "../userDetails/UserDetails";
import { createContext } from "react";

export const contextAPI = createContext();
export const routes = createBrowserRouter([
  {
    element: <Layouts />,
    errorElement: <NotFound />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Users />,
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        element: <UserDetails />,
        path: "/users/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
    ],
  },
  {
    element: <SignIn />,
    path: "/signin",
  },
  {
    element: <SignUp />,
    path: "/signup",
  },
]);
