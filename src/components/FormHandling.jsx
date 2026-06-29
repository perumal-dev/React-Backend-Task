import { useState } from "react";

const FormHandling = () => {
  const [studentName, setStudentName] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [course, setCourse] = useState("");
  const [characterText, setCharacterText] = useState("");
  const [upperText, setUpperText] = useState("");
  const [lowerText, setLowerText] = useState("");

  const inputStyle =
    "w-full border border-gray-300 rounded-lg px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const cardStyle =
    "bg-white shadow-md rounded-xl p-6 mb-6";

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          React useState Practice
        </h1>

        {/* Task 1 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            1. Student Name Input
          </h2>

          <input
            className={inputStyle}
            type="text"
            placeholder="Enter Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <p className="mt-4 text-blue-600 font-medium">
            {studentName}
          </p>
        </div>

        {/* Task 2 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            2. Employee Name
          </h2>

          <input
            className={inputStyle}
            type="text"
            placeholder="Enter Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />

          <p className="mt-4 text-green-600 font-medium">
            {employeeName}
          </p>
        </div>

        {/* Task 3 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            3. Age Input
          </h2>

          <input
            className={inputStyle}
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <p className="mt-4 text-purple-600 font-medium">
            {age}
          </p>
        </div>

        {/* Task 4 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            4. Email Form
          </h2>

          <input
            className={inputStyle}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="mt-4 text-red-600 font-medium">
            {email}
          </p>
        </div>

        {/* Task 5 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            5. Mobile Number
          </h2>

          <input
            className={inputStyle}
            type="text"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <p className="mt-4 text-orange-600 font-medium">
            {mobile}
          </p>
        </div>

        {/* Task 6 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            6. City Selection
          </h2>

          <input
            className={inputStyle}
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <p className="mt-4 text-indigo-600 font-medium">
            {city}
          </p>
        </div>

        {/* Task 7 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            7. Course Registration
          </h2>

          <input
            className={inputStyle}
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <p className="mt-4 text-cyan-600 font-medium">
            {course}
          </p>
        </div>

        {/* Task 8 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            8. Character Counter
          </h2>

          <input
            className={inputStyle}
            type="text"
            placeholder="Type Something..."
            value={characterText}
            onChange={(e) => setCharacterText(e.target.value)}
          />

          <p className="mt-4 font-semibold">
            Characters: {characterText.length}
          </p>
        </div>

        {/* Task 9 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            9. Uppercase Converter
          </h2>

          <input
            className={inputStyle}
            type="text"
            placeholder="Enter Text"
            value={upperText}
            onChange={(e) => setUpperText(e.target.value)}
          />

          <p className="mt-4 font-semibold text-blue-600">
            {upperText.toUpperCase()}
          </p>
        </div>

        {/* Task 10 */}
        <div className={cardStyle}>
          <h2 className="text-xl font-semibold mb-4">
            10. Lowercase Converter
          </h2>

          <input
            className={inputStyle}
            type="text"
            placeholder="Enter Text"
            value={lowerText}
            onChange={(e) => setLowerText(e.target.value)}
          />

          <p className="mt-4 font-semibold text-green-600">
            {lowerText.toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormHandling;