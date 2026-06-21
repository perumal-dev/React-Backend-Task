import { useNavigate } from "react-router-dom";


const Home = () => {

  const taskNav = useNavigate();
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to My Daily Task Website
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        This website contains the daily tasks and projects assigned by my
        institute. Each task helps me improve my React, JavaScript, HTML,
        CSS, and problem-solving skills.
      </p>

      <div className="flex gap-4">
        <button onClick={()=>{taskNav("/task")}}  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          View Tasks
        </button>

        <button onClick={()=>{taskNav("/project")}} className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
          View Projects
        </button>
      </div>
    </div>
    </>
  );
};

export default Home;
