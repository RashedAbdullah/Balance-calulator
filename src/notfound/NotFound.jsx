import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const err = useRouteError();

  return (
    <div className="bg-black flex justify-center">
      {/* <h1>{err.status}</h1>
      <p>{err.statusText}</p>
      <p>{err.message}</p> */}
      <img
        className="h-lvh bg-black"
        src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
        alt=""
      />
    </div>
  );
};

export default NotFound;
