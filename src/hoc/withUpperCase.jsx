import { useState } from "react";

const withUpperCase = (WrappedComponent) => {
  return () => {

    const [message, setMessage] = useState("");

    return (
      <div className="bg-white rounded-lg shadow-md p-6">

        <h2 className="text-xl font-bold mb-4">
          Task 2 - withUpperCase
        </h2>

        <input
          type="text"
          placeholder="Enter Message"
          className="border w-full p-2 rounded mb-5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <WrappedComponent
          message={message.toUpperCase()}
        />

      </div>
    );
  };
};

export default withUpperCase;