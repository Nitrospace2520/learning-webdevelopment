/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useCurrencyConverter = (currency) => {
  // $ useState hook:-
  const [data, setData] = useState({});

  // $ useEffect hook:-
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // .finally(() => console.log(data));
  }, [currency]);

  return data;
};

useCurrencyConverter.propTypes = {
  currency: "usd",
};

export default useCurrencyConverter;
