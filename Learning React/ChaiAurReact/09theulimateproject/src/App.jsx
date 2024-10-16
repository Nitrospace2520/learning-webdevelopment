/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index.js";
import { Outlet } from "react-router-dom";

import LoadingIcons from "react-loading-icons";

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // NOTE: This will check wherther the user is guests or logged in accout.
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <>
      {loading && (
        <div className="text-white h-screen flex justify-center items-center">
          <LoadingIcons.Circles />
        </div>
      )}
      {!loading && (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
          <div className="w-full block">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
