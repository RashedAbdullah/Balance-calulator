import React, { createContext, useState } from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../footer/Footer";
import Loading from "../loading/Loading";
import { ToastContainer } from "react-toastify"
import NavigationBar from "../navigation/NavigationBar";
import ScrollAnimation from "../scrollBar/ScrollAnimation";

export const contextAPI = createContext();
const Layouts = () => {
  const [googleUser, setGoogleUser] = useState("");
  const loadingData = useNavigation();

  return (
    <div>
      <contextAPI.Provider value={{ googleUser, setGoogleUser }}>
        <NavigationBar/>
        <ScrollAnimation/>
        <div>
          {loadingData.state === "loading" ? (
            <Loading />
          ) : (
            <Outlet />
          )}
        </div>
        <Footer />
      </contextAPI.Provider>
    </div>
  );
};

export default Layouts;
