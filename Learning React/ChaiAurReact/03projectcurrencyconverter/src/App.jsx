/* eslint-disable no-unused-vars */
import { useCallback, useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyConverter from "./hooks/useCurrencyConverter";

function App() {
  // $ useCustom Hook:-
  const data = useCurrencyConverter("usd");

  // $ useState Hook:-
  const [title, setTitle] = useState(true);
  const [fromVal, setFromVal] = useState("usd");
  const [toVal, setToVal] = useState("inr");
  const [inputText, setInputText] = useState("0");
  const [outputText, setOutputText] = useState("0");

  useEffect(() => {
    let val1 = data[fromVal];
    let val2 = data[toVal];
    let val = (val2 * inputText) / val1;
    setOutputText(val.toString());
  }, [data, inputText, fromVal, toVal]);

  // $ function:-
  const swapInputs = (e) => {
    setTitle((prev) => !prev);
  };
  // $ Function Return statement:-
  return (
    <div className="h-screen w-full bg-gray-900 text-center text-xl flex flex-col justify-center text-white">
      <h1 className="text-3xl font-bold underline mb-3 uppercase p-2">
        Currency Converter
      </h1>
      {data != null && (
        <div className="gap-3 flex flex-col">
          <section>
            <InputBox
              title={title ? "From" : "To"}
              data={data}
              type={fromVal}
              setType={setFromVal}
              input={inputText}
              setInput={setInputText}
            />
          </section>
          <button
            className="p-3 bg-blue-900 absolute top-1/2 left-1/2 ring z-10 rounded-md "
            onClick={(e) => swapInputs(e)}
          >
            Swap
          </button>
          <section>
            <InputBox
              title={!title ? "From" : "To"}
              data={data}
              type={toVal}
              setType={setToVal}
              input={outputText}
            />
          </section>
        </div>
      )}
      {data == null && <p className="text-blue-900 text-2xl">Loading... </p>}
    </div>
  );
}

export default App;
