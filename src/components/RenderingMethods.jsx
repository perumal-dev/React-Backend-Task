import { useState } from "react";

const RenderingMethods = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);
  const [studName, setStudName] = useState("Sudhan");
  const [status, setStatus] = useState(false);
  const [status1, setStatus1] = useState(true);
  const [showContent, setShowContent] = useState(true);
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(undefined);
  const [mobile, setMobile] = useState(null);
  const [salary, setSalary] = useState(25000);
  const [course, setCourse] = useState("MERN");
  const [employeeStatus, setEmployeeStatus] = useState(false);
  const [attendance, setAttendance] = useState(0);
  const [profileVisible, setProfileVisible] = useState(false);
  const [balance, setBalance] = useState(10000);

  return (
    <>
      <div className=" min-h-screen bg-gray-100 flex flex-col">
         <div className="bg-white mt-2 rounded p-10 shadow flex flex-col gap-5 ">
            <h1 className="flex justify-center text-4xl font-bold font-mono">Rendering Methods Tasks</h1>

         </div>
        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>
            Task 1 - Counter Application Create a counter using useState().
          </h1>
          <p>Count: {count}</p>
          <div className="flex gap-10">
            <button
              onClick={() => {
                setCount(count + 1);
              }}
              className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
            >
              Click me to increase the value
            </button>
            <button
              onClick={() => {
                setCount(count - 1);
              }}
              className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
            >
              Click me to Decrease the value
            </button>
            <button
              onClick={() => {
                setCount(0);
              }}
              className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
            >
              Click me to Rest the value
            </button>
          </div>
        </div>
        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 2 - Student Name Update</h1>
          <p>
            Initial value is {studName} . After clicking the below button
            initial value is changed.
          </p>
          <button
            onClick={() => {
              setStudName("Ravi");
            }}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            click me to change name
          </button>
        </div>
        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 3 - Age Increment</h1>
          <p>Initial Age: {age}</p>
          <button
            onClick={() => {
              setAge(age + 1);
            }}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Click me to increase the age
          </button>
        </div>
        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>
            Task 4 - Login Status Create a boolean state.Requirements: Initial
            value: false Add Login button Toggle between:
          </h1>
          {status ? <h1>Loged In</h1> : <h1>Loged Out</h1>}
          <button
            onClick={() => {
              setStatus(!status);
            }}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Click me to increase the age
          </button>
        </div>
        <div
          className={
            status1
              ? "bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5 "
              : " bg-black text-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5 "
          }
        >
          <h1>Task 5 - Theme Switch</h1>
          <p>
            Create a boolean state. Requirements: Initial value: false Add
            Toggle Theme button Display:
          </p>
          <button
            onClick={() => {
              setStatus1(!status1);
            }}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Click me!
          </button>
        </div>
        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 6 - Show / Hide Content</h1>

          {showContent && (
            <p>This paragraph can be shown and hidden using state.</p>
          )}

          <button
            onClick={() => setShowContent(!showContent)}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Toggle Content
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 7 - User Data Loading</h1>

          {user && (
            <>
              <p>Name: {user.name}</p>
              <p>City: {user.city}</p>
            </>
          )}

          <button
            onClick={() =>
              setUser({
                name: "Perumal",
                city: "Chennai",
              })
            }
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Load User
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 8 - Product Details</h1>

          {product && (
            <>
              <p>Product Name: {product.name}</p>
              <p>Price: ₹{product.price}</p>
            </>
          )}

          <button
            onClick={() =>
              setProduct({
                name: "Laptop",
                price: 50000,
              })
            }
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Load Product
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 9 - Mobile Number</h1>

          <p>Mobile Number: {mobile}</p>

          <button
            onClick={() => setMobile(9361643673)}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Load Mobile Number
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 10 - Salary Update</h1>

          <p>Salary: ₹{salary}</p>

          <button
            onClick={() => setSalary(salary + 5000)}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Increase Salary
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 11 - Course Selection</h1>

          <p>Selected Course: {course}</p>

          <button
            onClick={() => setCourse("React Native")}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Change Course
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 12 - Employee Status</h1>

          <p>{employeeStatus ? "Active" : "Inactive"}</p>

          <button
            onClick={() => setEmployeeStatus(!employeeStatus)}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Toggle Status
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 13 - Attendance Tracker</h1>

          <p>Total Attendance: {attendance}</p>

          <button
            onClick={() => setAttendance(attendance + 1)}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Present
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 14 - Profile Visibility</h1>

          {profileVisible && (
            <>
              <p>Name: Perumal</p>
              <p>Role: Full Stack Developer</p>
            </>
          )}

          <button
            onClick={() => setProfileVisible(!profileVisible)}
            className="bg-blue-700 hover:bg-blue-900 px-3 py-2 rounded text-white w-fit"
          >
            Show / Hide Profile
          </button>
        </div>

        <div className="bg-white m-10 rounded p-10 shadow-2xl flex flex-col gap-5">
          <h1>Task 15 - Bank Balance</h1>

          <p>Current Balance: ₹{balance}</p>

          <div className="flex gap-5">
            <button
              onClick={() => setBalance(balance + 1000)}
              className="bg-green-700 hover:bg-green-900 px-3 py-2 rounded text-white"
            >
              Deposit
            </button>

            <button
              onClick={() => setBalance(balance - 1000)}
              className="bg-red-700 hover:bg-red-900 px-3 py-2 rounded text-white"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderingMethods;
