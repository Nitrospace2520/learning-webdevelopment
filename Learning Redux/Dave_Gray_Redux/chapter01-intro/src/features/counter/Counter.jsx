import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incrementByAmount,
  decrementByAmount,
  increment,
  reset,
} from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);

  const resetAll = () => {
    setAmount(0);
    dispatch(reset());
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <p>{count}</p>
        <section>
          <button
            onClick={() => dispatch(decrementByAmount(Number(amount) || 0))}
          >
            Decrement By Amount
          </button>
          <button onClick={() => dispatch(decrement())}> ➖ </button>
          <button onClick={() => resetAll()}> RESET </button>
          <button onClick={() => dispatch(increment())}> ➕ </button>
          <button
            onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
          >
            Increment By Amount
          </button>
        </section>
        <section>
          <input
            type="number"
            name="value"
            id="value"
            value={amount}
            placeholder="Enter amount for increment/decrement"
            onChange={(e) => setAmount(e.target.value)}
          />
        </section>
      </div>
    </div>
  );
};

export default Counter;
