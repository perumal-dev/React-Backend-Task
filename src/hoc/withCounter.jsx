import { useState } from "react";

const withCounter = (WrappedComponent) => {
  return () => {

    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-6">

        <h2 className="text-xl font-bold mb-4">
          Task 3 - withCounter
        </h2>

        <WrappedComponent
          count={count}
          increment={increment}
          decrement={decrement}
        />

      </div>
    );
  };
};

export default withCounter;