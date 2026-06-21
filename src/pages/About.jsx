const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-6 py-12">
      <div className="bg-white max-w-4xl p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

        <p className="text-gray-700 leading-8 text-lg">
          Hello! I'm <span className="font-semibold">Perumal</span>, a passionate
          React.js and Full Stack Development trainee currently pursuing my
          training at <span className="font-semibold">SLA Institute</span>. I
          have a strong interest in web development and enjoy building
          responsive, user-friendly, and interactive web applications.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-4">
          My technical skills include{" "}
          <span className="font-semibold">
            React.js, JavaScript, HTML, CSS, and Tailwind CSS
          </span>
          . Through continuous learning and hands-on practice, I am developing
          the skills required to become a professional Full Stack Developer.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-4">
          So far, I have successfully completed{" "}
          <span className="font-semibold">2 projects</span>, which helped me
          strengthen my understanding of modern web development concepts,
          component-based architecture, and responsive design principles.
        </p>

        <p className="text-gray-700 leading-8 text-lg mt-4">
          My goal is to build scalable, efficient, and impactful applications
          while continuously improving my technical knowledge and
          problem-solving abilities. I am committed to learning new technologies
          and growing as a Full Stack Developer.
        </p>
      </div>
    </div>
  );
};

export default About;
