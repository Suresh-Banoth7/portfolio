import ProjectCard from "./ProjectCard";

const ProjectSection = ({ id }) => {
    const projects = [
      {
        title: 'BookBazaar - Full Stack Book Inventory Platform',
        description: 'Built RESTful APIs using layered architecture and integrated Spring Security and H2 database for testing. Achieved 100% test pass rate across 20+ automated integration tests.',
        image: 'https://placehold.co/600x400/A78BFA/FFFFFF?text=BookBazaar',
        link: '#', // Replace with actual project link if available
        github: '#', // Replace with actual GitHub link if available
        tags: ['RESTful APIs', 'Spring Security', 'H2 Database', 'Integration Testing']
      },
      {
        title: 'React E-Commerce App',
        description: 'Developed a responsive front end for 100+ products with Firebase Authentication and Redux Toolkit. Achieved average load time of 0.8 seconds and a 97/100 Lighthouse performance score.',
        image: 'https://placehold.co/600x400/818CF8/FFFFFF?text=E-Commerce+App',
        link: '#', // Replace with actual project link if available
        github: '#', // Replace with actual GitHub link if available
        tags: ['React', 'Firebase Authentication', 'Redux Toolkit', 'Responsive Design']
      },
      // You can add more projects here if you have them
    ];
  
    return (
      <section id={id} className="py-20 px-8 bg-white shadow-2xl rounded-3xl my-12 mx-auto max-w-5xl">
        <h2 className="text-5xl font-extrabold text-center text-indigo-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    );
  };

  export default ProjectSection