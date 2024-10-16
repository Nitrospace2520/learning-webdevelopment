/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // $ useState Hook:-
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [checkNumber, setCheckNumber] = useState(false);
  const [checkSpecial, setCheckSpecial] = useState(false);
  const [isCopy, setIscopy] = useState(false);

  // $ useRef hook for making refences:-
  const inputTextRef = useRef(null);

  // $ useCallback Hook :- (use for memorisation, optimization purpose)
  const generatePassword = useCallback(() => {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checkNumber) alphabet += "0123456789";
    if (checkSpecial) alphabet += "~`!@#$%^&*(){}[]";
    let string = "";
    for (let i = 0; i < length; i++) {
      string += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    setPassword(string);
  }, [length, checkNumber, checkSpecial, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    inputTextRef.current.select();
    window.navigator.clipboard.writeText(password);
    let text = inputTextRef.current.placeholder;
    console.log(text);
  }, [password]);

  // $ useEffect Hook:- (use for re-render for changing of the dependencies)
  useEffect(() => {
    generatePassword();
  }, [checkNumber, checkSpecial, length, generatePassword]);

  // $ function:-

  // $ JSX :-
  return (
    <div className="ring p-9 bg-black outline-none rounded-lg ">
      <div className="p-3">
        <h1>Password Generator</h1>
      </div>
      <div>
        <form action="" onClick={(e) => e.preventDefault()}>
          <section className="flex outline-none p-3 w-full justify-center">
            <input
              type="text"
              placeholder={password}
              ref={inputTextRef}
              className="flex-1 outline-none rounded-md px-2 text-lg"
              readOnly
            />
            <button
              className="bg-blue-900 text-lg"
              onClick={() => {
                // console.log(password.length);
                copyPasswordToClipboard();
                setIscopy((prev) => !prev);
              }}
            >
              {isCopy ? "COPIED" : "COPY"}
            </button>
          </section>
          <section className="flex justify-between p-3">
            <label
              htmlFor="length-of-password"
              onChange={(e) => {}}
              className="flex gap-1"
            >
              <input
                type="range"
                name="length-of-password"
                id="password-length"
                className=" cursor-pointer"
                min={0}
                value={length}
                max={36}
                onChange={(e) => setLength(e.target.value)}
              />
              <strong>length({length})</strong>
            </label>
            <label htmlFor="include-number" className="flex gap-1">
              <input
                type="checkbox"
                name="include-number"
                id="include-number"
                className=" cursor-pointer"
                onChange={() => setCheckNumber(!checkNumber)}
                checked={checkNumber}
              />
              <strong>Numbers</strong>
            </label>
            <label htmlFor="include-special" className="flex gap-1">
              <input
                type="checkbox"
                name="include-special"
                id="include-special"
                className=" cursor-pointer"
                checked={checkSpecial}
                onChange={() => setCheckSpecial((prev) => !prev)}
              />
              <strong>Special</strong>
            </label>
          </section>
        </form>
      </div>
    </div>
  );
}

export default App;
