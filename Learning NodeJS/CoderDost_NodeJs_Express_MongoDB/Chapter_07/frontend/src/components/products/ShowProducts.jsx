/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        console.log("Products fetched");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center flex-col">
      {loading ? (
        <p className="text-center text-3xl">Loading...</p>
      ) : (
        <p className="text-center text-3xl p-2">All the available Products</p>
      )}
      {!loading && products.length === 0 ? <p>No products found</p> : null}
      {!loading && products.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              rating={product.rating}
              thumbnail={product.thumbnail}
              className="m-4"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowProducts;
