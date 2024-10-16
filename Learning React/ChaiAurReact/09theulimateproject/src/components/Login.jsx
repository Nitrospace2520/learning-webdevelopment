/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Logo, Button, Input } from "./index";
import { login as authSliceLogin } from "../store/authSlice"; // reducer
import authService from "../appwrite/auth"; // authentication service

const Login = () => {
  // console.log("Components >> Login.jsx");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authSliceLogin(userData));
        }
        // console.log(session, userData, data);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`border border-black/10 mx-auto max-w-lg w-full bg-gray-100 p-10 rounded-xl text-black`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label={"Email : "}
              placeHolder={"Enter your email"}
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label={"Password : "}
              placeHolder={"Enter your password"}
              type={"password"}
              {...register("password", {
                required: true,
                // validate: {
                //   matchPatern: (value) =>
                //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                //       value
                //     ) || "Please enter a vaild password",
                // },
              })}
            />
            <Button label="Sign in" type="submit" className="w-full" />
          </div>
        </form>

        <p>
          Don&apos;t have any account?&nbsp;
          <Link
            to={"/signup"}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
