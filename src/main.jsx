import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./css/main.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes.jsx";
import { ToastContainer } from "react-toastify";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
