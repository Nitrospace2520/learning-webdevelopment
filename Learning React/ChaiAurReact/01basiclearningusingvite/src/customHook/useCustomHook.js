/* eslint-disable no-unused-vars */
import { useEffect, useCallback, useState } from "react";

const useCustomHook = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const callAPI = useCallback(() => {
    fetch(url)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err);
        // console.log(err);
      })
      .finally(() => setLoading(false));
  }, [url]);

  useEffect(() => {
    callAPI();
    // console.log(`${error}`);
  }, [callAPI, url]);

  return [data, error, loading];
};

export default useCustomHook;
