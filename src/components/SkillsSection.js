const SkillsSection = ({ id }) => {
    const skills = [
      { name: 'Java', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', proficiency: 95 },
      { name: 'Python', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', proficiency: 80 },
      { name: 'JavaScript/TypeScript', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 85 },
      { name: 'SQL', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', proficiency: 90 },
      { name: 'HTML/CSS', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', proficiency: 85 },
      { name: 'Spring Boot', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', proficiency: 95 },
      { name: 'Spring MVC', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', proficiency: 90 },
      { name: 'Spring Security', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', proficiency: 90 },
      { name: 'JPA/Hibernate', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg', proficiency: 88 },
      { name: 'React', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', proficiency: 75 },
      { name: 'Angular', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', proficiency: 70 },
      { name: 'Node.js', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', proficiency: 80 },
      { name: 'AWS', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', proficiency: 92 },
      { name: 'Docker', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', proficiency: 90 },
      { name: 'Kubernetes', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', proficiency: 80 },
      { name: 'Terraform', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', proficiency: 78 },
      { name: 'Jenkins', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', proficiency: 85 },
      { name: 'GitHub Actions', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg', proficiency: 82 },
      { name: 'PostgreSQL', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', proficiency: 90 },
      { name: 'MongoDB', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', proficiency: 70 },
      { name: 'Redis', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', proficiency: 85 },
      { name: 'Apache Kafka', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', proficiency: 80 },
      { name: 'OAuth2', level: 'Expert', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg', proficiency: 90 },
      { name: 'Prometheus', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', proficiency: 75 },
      { name: 'Grafana', level: 'Proficient', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', proficiency: 75 },
    ];
  
    return (
      <section id={id} className="py-20 px-8 bg-gray-100 rounded-3xl my-12 mx-auto max-w-5xl shadow-2xl">
        <h2 className="text-5xl font-extrabold text-center text-indigo-800 mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md border border-gray-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4 object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/CCCCCC/333333?text=Icon"; }}
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{skill.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{skill.level}</p>
              {/* Skill Level Bar */}
              <div className="skill-level-bar">
                <div className="skill-level-fill" style={{ width: `${skill.proficiency}%` }}></div>
              </div>
              <span className="text-gray-500 text-xs mt-1">{skill.proficiency}%</span>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default SkillsSection