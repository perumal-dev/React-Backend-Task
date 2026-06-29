const CounterDisplay = ({ count, increment, decrement }) => {
  return (
    <div className="bg-blue-100 rounded-lg p-6 shadow">

      <h2 className="text-xl font-bold mb-5">
        Count : {count}
      </h2>

      <div className="space-x-3">

        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          +
        </button>

        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          -
        </button>

      </div>

    </div>
  );
};

export default CounterDisplay;