/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Card({ username = "nir1729", gmail = "nir@dhara.org" }) {
  return (
    <div className="bg-black text-green-700 p-3 mt-1 rounded-3xl ">
      <h1>Username : {username}</h1>
      <h1>Gmail : {gmail}</h1>
    </div>
  );
}

export default Card;
