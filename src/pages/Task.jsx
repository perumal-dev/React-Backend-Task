import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-gray-200">
        <h1 className="text-5xl font-bold text-gray-800 pt-8 pl-3">
          Daily Assignments
        </h1>
        <p className="text-gray-600 mt-3 pl-3">
          A collection of tasks completed during my training.
        </p>
      </div>

      <div className="bg-gray-200 flex h-fit p-15 justify-around items-center gap-10 flex-wrap">
        <div className="bg-white h-80 w-60 flex-col flex  p-8 justify-evenly gap-10 items-center rounded drop-shadow-2xl">
          <h1>Day 4</h1>
          <p>
            Rendering Methods - Class component only, state, setState, lifecycle
            mount/update/unmount
          </p>
          <button
            onClick={() => {
              navigate("/usestate");
            }}
            className="bg-gray-600 hover:bg-gray-800 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            Assignment
          </button>
        </div>
        <div className="bg-white h-80 w-60 flex-col flex  p-8 justify-evenly gap-10 items-center rounded drop-shadow-2xl">
          <h1>Day 5</h1>
          <p>Hooks - UseState WIth rendering Methods</p>
          <button
            onClick={() => {
              navigate("/renderingmethods");
            }}
            className="bg-gray-600 hover:bg-gray-800 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            Assignment
          </button>
        </div>

        <div className="bg-white h-80 w-60 flex-col flex  p-8 justify-evenly gap-10 items-center rounded drop-shadow-2xl">
          <h1>Day 7</h1>
          <p>React UseState Hooks - with Form Handling</p>
          <button
            onClick={() => {
              navigate("/formhandling");
            }}
            className="bg-gray-600 hover:bg-gray-800 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            Assignment
          </button>
        </div>
        <div className="bg-white h-80 w-60 flex justify-around items-center rounded drop-shadow-2xl"></div>
      </div>
    </>
  );
};

export default Task;
