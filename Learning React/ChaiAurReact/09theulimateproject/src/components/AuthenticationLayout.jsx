/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingIcons from "react-loading-icons";

const AuthLayout = ({ children, authentication = false }) => {
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => {
    // console.log(state.status);
    return state.status;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      // console.log("Components >> AuthenticationLayout >> ");
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      // console.log(
      //   "Components >> AuthenticationLayout >> ",
      //   authentication,
      //   authStatus
      // );
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, authentication, navigate]);

  return loader ? (
    <div className="text-white h-screen flex justify-center items-center">
      <LoadingIcons.Circles />
    </div>
  ) : (
    { ...children }
  );
};

export default AuthLayout;
