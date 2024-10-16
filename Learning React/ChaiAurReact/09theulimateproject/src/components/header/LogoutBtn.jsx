/* eslint-disable no-unused-vars */
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch((err) => console.error(err));
  };

  return (
    <button
      onClick={handleLogout}
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-black rounded-full"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
