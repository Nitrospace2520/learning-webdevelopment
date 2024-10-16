/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Logo, Button, Input } from "./index.js";
import { login as authSliceLogin } from "../store/authSlice.js";
import authService from "../appwrite/auth.js";

const Signup = () => {
  console.log(`components >> Signup.jsx`);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const doSignup = async (data) => {
    // console.log(
    //   `components >> Signup.jsx >> doSignup >> ${JSON.stringify(data)}`
    // );
    setError("");
    try {
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authSliceLogin(userData));
        }
        // console.log(userData, session);
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      // console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 text-black">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          create an account
        </h2>

        <form onSubmit={handleSubmit(doSignup)}>
          <div className="space-y-5">
            <Input
              label="Username : "
              placeHolder="Enter your username"
              type="text"
              {...register("username", { required: true })}
            />
            <Input
              label="Email : "
              placeHolder="Enter your email"
              type="email"
              {...register("email", { required: true })}
            />
            <Input
              label="Password : "
              placeHolder="Enter your password"
              type="password"
              {...register("password", { required: true })}
            />
            <Button label="Sign up" type="submit" className="w-full" />
          </div>
        </form>

        <p>
          Already have any account?&nbsp;
          <Link
            to={"/login"}
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            login
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
