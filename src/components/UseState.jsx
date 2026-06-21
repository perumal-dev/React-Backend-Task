import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(true);
  const [arr, setArr] = useState([]);
  const [obj] = useState({name:"Roshan",age:23});

  
    const handleClick3 = () => {
    setArr(["Perumal","Madhan","Dharma"])
  };

  console.log(arr);
  






  const handleClick = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount(count - 1);
  };

  

  return (
    <>
      <div className="bg-blue-300 mt-10 p-10 flex flex-col gap-3">
        <h1>Task 1</h1>
        <p>Counter program using useState</p>
        <h1>{count}</h1>
        <button
          onClick={handleClick}
          className="rounded bg-gray-400 px-2 py-1 text-white border"
        >
          Click me to increase
        </button>
        <button
          onClick={handleClick2}
          className="rounded bg-gray-400 px-2 py-1 text-white border"
        >
          Click me to Decrease
        </button>
      </div>
      <div className="bg-blue-300 mt-10 p-10 flex flex-col gap-3">
        <h1>Program 2</h1>

        {check ? <h1>Hii!</h1> : <h1>Bye</h1>}

        <button
          onClick={() => {
            setCheck(!check);
          }}
          className="rounded bg-gray-400 px-2 py-1 text-white border"
        >
          {" "}
          Click to see!{" "}
        </button>
      </div>
      <div className="bg-blue-300 mt-10 p-10 flex flex-col gap-3">
<ul>
     {
            arr.map((i,e)=>{
               return <li key={i}>{e}</li>

            })
         }

</ul>
        
        <button onClick={handleClick3} className="rounded bg-gray-400 px-2 py-1 text-white border">click to see rray</button>
      </div>

       <div className="bg-blue-300 mt-10 p-10 flex flex-col gap-3">

        <h1>{obj.age}</h1>

       </div>

    </>
  );
};

export default UseState;
