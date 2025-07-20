const AboutSection = ({ id }) => (
  <section id={id} className="py-20 px-8 bg-white shadow-2xl rounded-3xl my-12 mx-auto max-w-5xl">
    <h2 className="text-5xl font-extrabold text-center text-indigo-800 mb-12">About Me</h2>
    <div className="flex flex-col md:flex-row items-center md:space-x-12">
      <div className="md:w-1/3 mb-8 md:mb-0 text-center">
        <img
          src="https://placehold.co/400x400/E0E7FF/4338CA?text=Suresh+Photo"
          alt="Suresh Banoth"
          className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl border-4 border-indigo-200 animate-float"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x400/E0E7FF/4338CA?text=Placeholder";
          }}
        />
      </div>
      <div className="md:w-2/3 text-lg text-gray-700 leading-relaxed">
        <p className="mb-4">
          Hello! I'm <span className="font-semibold text-indigo-700">Suresh Banoth</span>, an accomplished Java Backend Developer with 5+ years of experience in designing, building, and maintaining scalable, event-driven microservices in cloud-native environments (AWS). I specialize in Spring Boot, Java 17/11, Docker/Kubernetes, and CI/CD automation.
        </p>
        <p className="mb-4">
          I have proven success in reducing API response times by 80%, improving database throughput by 45%, and modernizing legacy systems. I am adept at translating complex business needs into high-performance backend solutions and a strong advocate of TDD, DevSecOps, and Agile/Scrum best practices.
        </p>
        <p className="mb-0">
          My expertise spans across various technologies including Java, Python, JavaScript/TypeScript, SQL, HTML/CSS, Spring Boot, React, Angular, Node.js, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, Kafka, and more.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
