import { useNavigate } from "react-router-dom";

const Task = () => {

  const navigate = useNavigate()


  const handleClick = ()=>{

    navigate("/usestate")

  }


  return (
    <>
    <div> <h1>TASK</h1>
    </div>
    <div className="bg-gray-200 flex h-screen justify-around items-center gap-10 flex-wrap">
      <div className="bg-white h-80 w-60 flex-col flex  p-8 justify-center gap-10 items-center rounded drop-shadow-2xl">
        <h1>Day 4</h1>
        <p>Rendering Methods - Class component only, state, setState, lifecycle mount/update/unmount</p>
        <button onClick={handleClick} className="bg-gray-400 hover:bg-gray-700 text-white font-medium px-5 py-2 rounded-lg transition">
  Assignment
</button>
        
        
        </div>
      <div className="bg-white h-80 w-60 flex justify-around items-center rounded drop-shadow-2xl">2</div>
      <div className="bg-white h-80 w-60 flex justify-around items-center rounded drop-shadow-2xl">4</div>
      <div className="bg-white h-80 w-60 flex justify-around items-center rounded drop-shadow-2xl">5</div>




    </div>
    
    
    </>
  )
}

export default Task