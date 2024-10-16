// import { useForm } from "react-hook-form";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  // const { register, handleSubmit, watch } = useForm();
  const userRef = useRef();
  const errorRef = useRef();

  //! useState for user, password, and confirm password:-
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pass, setPass] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [matchPass, setMatchPass] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMessage, setErrMessage] = useState("");
  const [success, setSuccess] = useState(false);

  //! useEffect for user and password, and confirm password:-
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
    // console.log("user: ", user, "\nresult: ", result);
  }, [user]);

  useEffect(() => {
    const result = PASS_REGEX.test(pass);
    setValidPass(result);
    // console.log("pass: ", pass, "\nresult: ", result);
    const match = pass === matchPass;
    setValidMatch(match);
  }, [pass, matchPass]);

  useEffect(() => {
    setErrMessage("");
  }, [user, pass, matchPass]);

  //! onsubmit function:-
  const onsubmit = async (event) => {
    event.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PASS_REGEX.test(pass);
    const v3 = pass === matchPass;
    if (!v1 || !v2 || !v3) {
      setErrMessage("Registration failed. Please check the form.");
      return;
    }
    // console.log("user: ", user, "\npass: ", pass, "\nmatchPass: ", matchPass);
    if (validName && validPass && validMatch) {
      try {
        const response = await axios.post(
          "/register",
          JSON.stringify({
            username: user,
            password: pass,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log("response: ", JSON.stringify(response));
        setSuccess(() => true);
        setErrMessage("");
        console.log("Registration successful.");
      } catch (error) {
        console.error("Registration failed.");
        setSuccess(() => false);
        setErrMessage("Registration failed. Please check the form.");
        errorRef.current.focus();
      }
    } else {
      setSuccess(() => false);
      setErrMessage("Registration failed. Please check the form.");
      console.log("Registration failed.");
    }
    // console.log("success: ", success);
    setUser("");
    setPass("");
    setMatchPass("");
  };
  return (
    <main className="main">
      {success ? (
        <div className="success">
          <p>Registration successful.</p>
          <button>
            <a href="/login">Login</a>
          </button>
        </div>
      ) : (
        <section>
          <p
            ref={errorRef}
            className={errMessage ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMessage}
          </p>
          <h2>Register</h2>
          {/* <form onSubmit={handleSubmit(onsubmit)}> */}
          <form onSubmit={onsubmit}>
            <div className="for-username">
              <label htmlFor="username">
                Username:
                <span className={validName ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter a username"
                value={user}
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                autoComplete="off"
                required
                // {...register("username", { required: true })}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Username must be 4-24 characters long.
                <br /> It must start with a letter.
                <br /> can contain letters, numbers, hyphens, and underscores.
              </p>
            </div>
            <div className="for-password">
              <label htmlFor="password">
                Password
                <span className={validPass ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPass || !pass ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                value={pass}
                required
                onChange={(e) => setPass(e.target.value)}
                onFocus={() => setPassFocus(true)}
                onBlur={() => setPassFocus(false)}
                aria-invalid={validPass ? "false" : "true"}
                aria-describedby="pwdnote"
                // {...register("password", { required: true })}
              />
              <p
                id="pwdnote"
                className={
                  passFocus && pass && !validPass ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Password must be 8-24 characters long.
                <br /> It must contain at least one uppercase letter,
                <br /> one lowercase letter, one number, and one special
                character.
                <br /> Special characters are{" "}
                <span aria-label="exclamation mark">! </span>
                <span aria-label="at sign">@ </span>
                <span aria-label="hash"># </span>
                <span aria-label="dollar">$ </span>
                <span aria-label="percent">% </span>
              </p>
            </div>
            <div className="for-matchpassword">
              <label htmlFor="confirm-password">
                Confirm Password
                <span className={validMatch && matchPass ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validMatch || !matchPass ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm password"
                value={matchPass}
                onChange={(e) => setMatchPass(e.target.value)}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="cpwdnote"
                required
                // {...register("confirm-password", {
                //   required: true,
                //   validate: (value) => value === watch("password"),
                // })}
              />
              <p
                id="cpwdnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the password you entered above.
              </p>
            </div>
            {/* <button type="submit" onClick={handleSubmit(onsubmit)}> */}
            <button
              type="submit"
              onClick={onsubmit}
              disabled={!validName || !validPass || !validMatch ? true : false}
            >
              Register
            </button>
            <p>
              Already registered?{" "}
              <Link to="/login" className="bold">
                Login
              </Link>
            </p>
          </form>
        </section>
      )}
    </main>
  );
};

export default Register;
