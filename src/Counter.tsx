import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2 className="mt-4">Count: {count}</h2>
      </div>

      <div className="mt-4">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Increment
        </button>

        <button
          className="btn btn-secondary ms-2"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
export default Counter;
