/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = ({ id, title, price, description, rating, thumbnail }) => {
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    // console.log("Add to Cart, id: ", id);
    // navigate(`/${id}`);
    try {
      const response = await axios.get(`/api/products/${id}`);
      const product = response.data;
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" border-slate-500 border-2 p-4 flex flex-grow flex-col justify-center">
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        height="360"
        width="480"
        className="object-cover flex justify-center aspect-auto rounded-md"
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500">{description}</p>
      <section className="flex justify-between">
        <p className="text-green-500 font-bold">Price: ${price}</p>
        <p className="text-yellow-500">Rating: {rating}</p>
      </section>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
