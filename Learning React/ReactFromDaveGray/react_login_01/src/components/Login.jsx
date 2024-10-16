import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "../context/AuthProvider";
import axios from "../api/axios";

const Login = () => {
  console.log("Logins ");
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMessage("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, password);
    try {
      const response = await axios.post(
        "/auth",
        JSON.stringify({
          username: user,
          password: password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({
        isLoggedIn: true,
        user: { username: user, password, roles },
        accessToken,
      });

      setSuccess(true);
      setUser("");
      setPassword("");
    } catch (error) {
      if (!error.response) {
        setErrMessage("Network error. Please try again later.");
      } else if (error.response?.status === 400) {
        setErrMessage("Missing username or password.");
      } else if (error.response?.status === 401) {
        setErrMessage("Invalid username or password.");
      } else if (error.response?.status === 500) {
        setErrMessage("Server error. Please try again later.");
      } else {
        setErrMessage("Unknown error. Please try again later.");
      }
      setSuccess(false);
      errorRef.current.focus();
    }
  };

  return (
    <main className="main">
      {success ? (
        <section className="successmsg" aria-live="assertive">
          <span>Successfully logged in!</span>
        </section>
      ) : (
        <>
          <section
            ref={errorRef}
            className={errMessage ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            <FontAwesomeIcon icon={faTimes} />
            <span>{errMessage}</span>
          </section>
          <h2>Login</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="for-username">
              <label htmlFor="user">Username:</label>
              <input
                type="text"
                id="user"
                name="user"
                placeholder="Enter your username"
                autoComplete="off"
                required
                ref={userRef}
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="for-password">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
            <p>
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="bold">
                Sign up
              </Link>
            </p>
          </form>
        </>
      )}
    </main>
  );
};

export default Login;
