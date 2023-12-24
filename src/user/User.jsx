import React from "react";
import { NavLink } from "react-router-dom";

const User = ({
  user: {
    id,
    name,
    email,
    website,
    company: { name: compnayName },
  },
}) => {
  return (
    <div>
      <div className=" shadow-lg bg-cyan-800 drop-shadow-lg text-white p-3 rounded">
        <h2 className="text-center font-bold text-cyan-300">User Details</h2>
        <p>Name: {name}</p>
        <p>Gmail: {email}</p>
        <p>Company: {compnayName}</p>
        <p>Website: {website}</p>
        <NavLink to={`/users/${id}`}>
          <button className=" bg-cyan-950 py-1 w-full rounded mt-2">
            User details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default User;
