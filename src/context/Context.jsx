import React, { createContext, useState } from "react";

export const userContext = createContext();

const ContextFunction = ({ children }) => {
  const [googleUserDetails, setGoogleUserDetails] = useState();
  const [githubUserDetails, setGithubUserDetails] = useState();
  const [emailUserData, setEmailUserData] = useState();

  const userDataObjet = {
    googleUserDetails,
    setGoogleUserDetails,
    githubUserDetails,
    setGithubUserDetails,
    emailUserData,
    setEmailUserData,
  };


  return (
    <userContext.Provider value={userDataObjet}>
      {children}
    </userContext.Provider>
  );
};

export default ContextFunction;
