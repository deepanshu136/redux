import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./feature/counter/Counterslice";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncermentClick = () => {
    dispatch(increment());
  };
  const handleDecrementClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleIncermentByAmountClick = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <>
      <div className="container">
        <button onClick={handleIncermentClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br />
        <br />
        <button onClick={handleResetClick}>Reset</button>
        <br />
        <br />
        <input
          type="Number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleIncermentByAmountClick}>
          IncrementByAmoubt
        </button>
      </div>
    </>
  );
}

export default App;
