import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const UserDetails = () => {
  const userData = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className=" h-[90vh] text-center bg-green-600 text-white p-10 ">
      <h1 className="text-3xl font-bold p-5">User full Details</h1>
      <hr />
      <p className="pt-5">User id: {userData.id}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
      <p>City: {userData.address.city}</p>
      <p>Zipcode: {userData.address.zipcode}</p>
      <p>Website: {userData.website}</p>
    </div>
  );
};

export default UserDetails;
