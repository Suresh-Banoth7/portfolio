import { FileText } from "lucide-react";

const ResumeSection = ({ id }) => (
    <section id={id} className="py-20 px-8 bg-gray-100 rounded-3xl my-12 mx-auto max-w-5xl shadow-2xl">
      <h2 className="text-5xl font-extrabold text-center text-indigo-800 mb-12">My Resume</h2>
      <div className="text-center mx-auto max-w-3xl">
        <p className="text-lg text-gray-700 mb-8">
          You can download my full resume in PDF format, or view a summary of my experience below.
        </p>
        <a
          href="https://example.com/Suresh.Banoth.pdf" // IMPORTANT: Replace with the actual URL to your hosted resume PDF
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300 transform hover:scale-105 mb-12"
        >
          <FileText className="w-5 h-5 mr-2" /> Download Resume (PDF)
        </a>
  
        <div className="text-left bg-white p-8 rounded-3xl shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Summary</h3>
          <p className="text-gray-700 mb-6">
            Accomplished Java Backend Developer with 5+ years of experience in designing, building, and maintaining scalable, event-driven microservices in cloud-native environments (AWS). Specialized in Spring Boot, Java 17/11, Docker/Kubernetes, and CI/CD automation. Proven success in reducing API response times by 80%, improving database throughput by 45%, and modernizing legacy systems. Adept at translating complex business needs into high-performance backend solutions. Strong advocate of TDD, DevSecOps, and Agile/Scrum best practices.
          </p>
  
          <h4 className="text-2xl font-bold text-indigo-700 mb-3">Professional Experience</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-4">
            <li>
              <strong>Java Backend Developer Intern</strong> - AmeriSource Inc, San Francisco, CA (Aug 2024 - Jan 2025)
              <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                <li>Led development of six Spring Boot microservices with DevOps teams, improving API reliability by 40%.</li>
                <li>Implemented Apache Kafka for event-driven architecture, reducing order processing latency by 60%.</li>
                <li>Deployed Dockerized microservices to AWS ECS Fargate, reducing DevOps onboarding time by 50%.</li>
                <li>Streamlined infrastructure provisioning with Terraform and GitHub Actions, reducing deployment time by 75%.</li>
                <li>Configured monitoring with Prometheus, Grafana, and ELK Stack, reducing MTTD by 80%.</li>
              </ul>
            </li>
            <li>
              <strong>Senior Java Backend Developer</strong> - Infosys Ltd, Hyderabad, India (Feb 2022 - Aug 2023)
              <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                <li>Migrated monolithic applications to Spring Boot microservices, achieving 60% faster APIs and 40% less downtime.</li>
                <li>Designed CI/CD pipelines using Jenkins and GitLab, reducing release cycle from three days to under 12 hours.</li>
                <li>Presented PostgreSQL optimization results to stakeholders, reducing response time from 200ms to 100ms.</li>
                <li>Mentored and guided three junior developers on microservices architecture through weekly code reviews.</li>
              </ul>
            </li>
            <li>
              <strong>Java Backend Developer</strong> - Redington Group, Hyderabad, India (Sep 2019 - Jan 2022)
              <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                <li>Collaborated closely with product teams to modernize legacy systems, achieving 99.95% uptime.</li>
                <li>Transitioned backend infrastructure to AWS EC2 and RDS, reducing operational costs by 28%.</li>
                <li>Boosted REST API throughput by 40% via Redis caching and SQL optimization, supporting 2,000+ users.</li>
                <li>Coordinated OAuth2 and RBAC authentication implementation, reducing unauthorized access attempts by 90%.</li>
              </ul>
            </li>
          </ul>
  
          <h4 className="text-2xl font-bold text-indigo-700 mb-3">Education</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <strong>M.S., Information Technology & Management</strong> - Golden Gate University, San Francisco, CA (Sep 2023 - Apr 2025)
              <ul className="list-disc list-inside ml-8 text-gray-600">
                <li>GPA: $3.93/4.0$, Dean's List</li>
                <li>Relevant Coursework: Cloud Computing, Software Architecture, Database Management</li>
              </ul>
            </li>
            <li>
              <strong>B.Tech, Electronics & Communication Engineering</strong> - Indian Institute of Information Technology (IIIT) Allahabad, Allahabad, India (Jun 2015 - Sep 2019)
              <ul className="list-disc list-inside ml-8 text-gray-600">
                <li>Honors Graduate</li>
              </ul>
            </li>
          </ul>
  
          <h4 className="text-2xl font-bold text-indigo-700 mb-3">Project Highlights</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <strong>Auth-System</strong> - Java, Spring Boot, MySQL, React, Docker (Mar 2025 - Present)
              <ul className="list-disc list-inside ml-8 text-gray-600">
                <li>Built full-stack authentication system with JWT supporting 10,000+ users, reducing login response time by 65%.</li>
                <li>Amplified backend performance by 80% via multithreading and pagination for 100,000+ records.</li>
                <li>Constructed scalable file upload system with Excel import using OpenCSV, reducing manual entry by 90%.</li>
                <li>Integrated Swagger docs, Postman tests, and Actuator health checks, improving API coverage by 100%.</li>
                <li>Deployed Dockerized backend to Railway and React frontend to Vercel with 99.8% deployment success rate.</li>
              </ul>
            </li>
            <li>
              <strong>Portfolio Website</strong> - React, Tailwind CSS, Vercel (Apr 2025 - Present)
              <ul className="list-disc list-inside ml-8 text-gray-600">
                <li>Created responsive portfolio with React hooks and CSS Grid, achieving 98+ Lighthouse score.</li>
                <li>Launched to Vercel with GitHub Actions CI/CD, maintaining sub-3s load times and optimal performance.</li>
              </ul>
            </li>
          </ul>
  
          <h4 className="text-2xl font-bold text-indigo-700 mb-3">Technical Skills & Tools</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li><strong>Programming Languages:</strong> Java, Python, TypeScript</li>
            <li><strong>Frameworks & Libraries:</strong> Spring Boot, Spring Cloud, Hibernate, JPA, React</li>
            <li><strong>Cloud Platforms:</strong> AWS (EC2, RDS, ECS Fargate), Docker, Kubernetes</li>
            <li><strong>DevOps & CI/CD:</strong> Terraform, GitHub Actions, Jenkins, GitLab Pipelines</li>
            <li><strong>Databases & Streaming:</strong> PostgreSQL, MySQL, MongoDB, Redis, Apache Kafka, RabbitMQ</li>
            <li><strong>Monitoring & Testing:</strong> Prometheus, Grafana, JUnit, Mockito, SonarQube</li>
          </ul>

          <h4 className="text-2xl font-bold text-indigo-700 mb-3">Certifications</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Oracle Certified Java SE 11 Developer 2023</li>
            <li>Spring Professional Certification 2023</li>
            <li>Angular Professional 2022</li>
            <li>AWS Certified Cloud Practitioner 2024</li>
            <li>Agile Developer Certification 2023</li>
          </ul>
        </div>
      </div>
    </section>
);
export default ResumeSection;
