import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FaBackwardStep } from "react-icons/fa6";

const UserDetails = () => {
  const userData = useLoaderData();
  console.log(userData)
  const navigate = useNavigate();

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
      <div>
        <button onClick={()=>navigate(-1)} className="bg-green-700 px-12 py-1 rounded mt-5 hover:bg-green-800 transition">
        <FaBackwardStep size="30px"/>
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
