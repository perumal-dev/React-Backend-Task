const Project = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>

      <p className="text-lg text-gray-600 mb-8">
        Here are some of the projects I have completed as part of my learning
        journey. These projects helped me strengthen my React, JavaScript, and
        problem-solving skills.
      </p>

      <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-3">
          ArrayVerse – Complete JavaScript Array Guide
        </h2>

        <p className="text-gray-700 mb-4">
          ArrayVerse is a comprehensive learning platform designed to help
          developers understand JavaScript Array Methods from beginner to
          advanced level. The project provides detailed explanations, syntax,
          examples, and practical use cases for various array methods in an
          easy-to-understand format.
        </p>

        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>Covers JavaScript Array Methods from basic to advanced.</li>
          <li>Interactive and beginner-friendly interface.</li>
          <li>Built using React, Vite, and Tailwind CSS.</li>
          <li>Fully responsive design for desktop and mobile devices.</li>
          <li>Deployed successfully on Vercel.</li>
        </ul>

        <div className="flex gap-4">
          <button
            onClick={() =>
              window.open("https://array-verse-project.vercel.app/", "_blank")
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            View Project
          </button>

          <button
           onClick={() =>
              window.open("https://github.com/perumal-dev/ArrayVerse-Project", "_blank")
            }
             className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
            GitHub Repository
          </button>
        </div>
      </div>
    </>
  );
};

export default Project;
