import React, { createContext, useState } from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../footer/Footer";
import Loading from "../loading/Loading";
import { Example } from "../menu/Examle";
import { ToastContainer } from "react-toastify"

export const contextAPI = createContext();
const Layouts = () => {
  const [googleUser, setGoogleUser] = useState("sjkdhfls");
  const loadingData = useNavigation();

  return (
    <div>
      <contextAPI.Provider value={{ googleUser, setGoogleUser }}>
        <Header />
        <div className=" sm:hidden">
          <Example />
        </div>
        <div>
          {loadingData.state === "loading" ? (
            <Loading />
          ) : (
            <Outlet value={googleUser} />
          )}
        </div>
        <ToastContainer />
        <Footer />
      </contextAPI.Provider>
    </div>
  );
};

export default Layouts;
