// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  // $ Old Method:
  /* const [data, setData] = useState({});
  useEffect(() => {
    let api = `https://api.github.com/users/nir2520`; // https://api.github.com/users/nir2520
    fetch(api)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []); */

  // $ New Method:-
  const data = useLoaderData();

  return (
    <div className="flex justify-center flex-col items-center">
      <figure>
        <img
          src={data["avatar_url"]}
          alt={data["name"]}
          className="rounded-full "
        />
      </figure>
      <h1>{data["name"]}</h1>
    </div>
  );
};

export default Github;

// export const githubInfoLoader = async () => {
//   const response = await fetch(`https://api.github.com/users/nir2520`);
//   return response.json();
// };
