import { useState } from "react";

const withBackgroundColor = (WrappedComponent) => {
  return (props) => {
    const [color, setColor] = useState("");

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Task 1 - withBackgroundColor</h2>

        <input
          type="text"
          placeholder="Enter Background Color"
          className="border w-full p-2 rounded mb-5"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <WrappedComponent {...props} backgroundColor={color} />
      </div>
    );
  };
};

export default withBackgroundColor;
