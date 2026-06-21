import { useNavigate } from "react-router-dom";

const Task = () => {
  const navigate = useNavigate();



  return (
    <>
    
      <div className="bg-gray-200 flex h-screen justify-around items-center gap-10 flex-wrap">
        <div className="bg-white h-80 w-60 flex-col flex  p-8 justify-evenly gap-10 items-center rounded drop-shadow-2xl">
          <h1>Day 4</h1>
          <p>
            Rendering Methods - Class component only, state, setState, lifecycle
            mount/update/unmount
          </p>
          <button
            onClick={()=>{
              navigate("/usestate")
            }}
            className="bg-gray-600 hover:bg-gray-800 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            Assignment
          </button>
        </div>
        <div className="bg-white h-80 w-60 flex-col flex  p-8 justify-evenly gap-10 items-center rounded drop-shadow-2xl">
          <h1>Day 5</h1>
          <p>
           Hooks - UseState WIth rendering Methods
          </p>
          <button
            onClick={()=>{
              navigate("/renderingmethods")
            }}
            className="bg-gray-600 hover:bg-gray-800 text-white font-medium px-5 py-2 rounded-lg transition"
          >
            Assignment
          </button>
        </div>

        <div className="bg-white h-80 w-60 flex justify-around items-center rounded drop-shadow-2xl">
          
        </div>
        <div className="bg-white h-80 w-60 flex justify-around items-center rounded drop-shadow-2xl">
          
        </div>
      </div>
    </>
  );
};

export default Task;
