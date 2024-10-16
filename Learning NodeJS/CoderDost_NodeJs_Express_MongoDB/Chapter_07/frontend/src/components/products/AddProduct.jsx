import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    addProduct(data);
  };

  const addProduct = async (product) => {
    try {
      // console.log(product);
      const response = await axios.post("/api/products", product);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className=" border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block">
            Description
          </label>
          <input
            type="text"
            id="description"
            {...register("description")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="discountPercentage" className="block">
            Discount Percentage
          </label>
          <input
            type="number"
            id="discountPercentage"
            {...register("discountPercentage")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            {...register("rating")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            {...register("stock")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block">
            Brand
          </label>
          <select
            id="brand"
            {...register("brand")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          >
            <option value="POCO">POCO</option>
            <option value="Apple">Apple</option>
            <option value="Infiix">Infiix</option>
            <option value="Samsung">Samsung</option>
            <option value="Redmi">Redmi</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Realme">Realme</option>
            <option value="Nothing">Nothing</option>
            <option value="Oneplus">Oneplus</option>
            <option value="Oppo">Oppo</option>
            <option value="vivo">vivo</option>
            <option value="Nokia">Nokia</option>
            <option value="Jio">Jio</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block">
            Category
          </label>
          <select
            id="category"
            {...register("category")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          >
            <option value="mobiles">Mobiles</option>
            <option value="tablets">Tablets</option>
            <option value="laptops">Laptops</option>
            <option value="powerbank">Powerbank</option>
            <option value="watch">Watch</option>
            <option value="trimmers">Trimmers</option>
            <option value="earphones">Earphones</option>
            <option value="headphones">Headphones</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="thumbnail" className="block">
            Thumbnail
          </label>
          <input
            type="text"
            id="thumbnail"
            {...register("thumbnail")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="images" className="block">
            Images
          </label>
          <input
            type="text"
            id="images"
            {...register("images")}
            className="border border-gray-300 rounded-md p-2 w-full text-white bg-gray-700"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

/*
"id": 1,
"title": "iPhone 9",
"description": "An apple mobile which is nothing like apple",
"price": 549,
"discountPercentage": 12.96,
"rating": 4.69,
"stock": 94,
"brand": "Apple",
"category": "smartphones",
"thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
"images": [
"https://cdn.dummyjson.com/product-images/1/1.jpg",
"https://cdn.dummyjson.com/product-images/1/2.jpg",
"https://cdn.dummyjson.com/product-images/1/3.jpg",
"https://cdn.dummyjson.com/product-images/1/4.jpg",
"https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
]
*/
