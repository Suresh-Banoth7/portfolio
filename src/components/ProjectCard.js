const ProjectCard = ({ project }) => (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/333333?text=Project+Image"; }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-indigo-600 text-white text-center py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300"
          >
            View Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-indigo-600 text-indigo-600 text-center py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );

  export default ProjectCard