import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../user/User";

const Users = () => {
  const alluser = useLoaderData();
  return (
    <div className="sticky grid lg:grid-cols-4 gap-3 p-4 sm:grid-cols-2 ">
      {alluser?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
