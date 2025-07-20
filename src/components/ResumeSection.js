import { FileText } from "lucide-react";

const ResumeSection = ({ id }) => (
    <section id={id} className="py-20 px-8 bg-gray-100 rounded-3xl my-12 mx-auto max-w-5xl shadow-2xl">
      <h2 className="text-5xl font-extrabold text-center text-indigo-800 mb-12">My Resume</h2>
      <div className="text-center mx-auto max-w-3xl">
        <p className="text-lg text-gray-700 mb-8">
          You can download my full resume in PDF format, or view a summary of my experience below.
        </p>
        <a
          href="https://example.com/SURESH_BANOTH_Resume.pdf" // IMPORTANT: Replace with the actual URL to your hosted resume PDF
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
              <strong>Java Backend Developer Intern</strong> - Ameri Source INC (Jan 2024 - Jan 2025)
              <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                <li>Developed and optimized 6 Spring Boot microservices handling ~8K requests/day, with 92% unit test coverage using JUnit 5 & Mockito.</li>
                <li>Integrated Kafka for asynchronous event processing, reducing order latency by 30 seconds.</li>
                <li>Containerized services with Docker and deployed via AWS ECS Fargate, cutting onboarding time for new engineers by 50%.</li>
                <li>Built CI/CD pipelines with GitHub Actions and Terraform, reducing manual deployment by 75%.</li>
                <li>Implemented centralized logging and monitoring using ELK, Prometheus, and Grafana - reduced issue detection time from 15 to 3 minutes.</li>
              </ul>
            </li>
            <li>
              <strong>Java Backend Developer</strong> - Redington Group, India (Sep 2019 - Sep 2023)
              <ul className="list-disc list-inside ml-8 text-gray-600 space-y-1">
                <li>Re-architected backend of a 12-microservice suite for inventory and order management, used by 30K+ daily users.</li>
                <li>Led migration from Java 8 monolith to Spring Boot microservices on AWS, improving uptime to 99.95% and reducing infra cost by 25%.</li>
                <li>Integrated OAuth2 and RBAC security measures, reducing unauthorized access by 90%.</li>
                <li>Improved query performance by 40% with Redis caching, JPA optimization, and PostgreSQL tuning.</li>
                <li>Conducted 100+ code reviews, mentored 4 junior developers, and promoted Agile/TDD culture.</li>
              </ul>
            </li>
          </ul>
  
          <h4 className="text-2xl font-bold text-indigo-700 mb-3">Education</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <strong>M.S., Information Technology & Management</strong> - Golden Gate University (Sep 2023 - Apr 2025)
              <ul className="list-disc list-inside ml-8 text-gray-600">
                <li>Achievements: Dean's List</li>
              </ul>
            </li>
            <li>
              <strong>B.Tech, Electronics & Communication Engineering</strong> - Indian Institute of Information Technology, Allahabad (Jun 2015 - Sep 2019)
              <ul className="list-disc list-inside ml-8 text-gray-600">
                <li>Achievements: Honors Graduate</li>
              </ul>
            </li>
          </ul>
  
          <h4 className="text-2xl font-bold text-indigo-700 mb-3">Project Highlights</h4>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
              <strong>BookBazaar - Full Stack Book Inventory Platform</strong>
              <ul className="list-disc list-inside ml-8 text-gray-600">
                <li>Built RESTful APIs using layered architecture and integrated Spring Security and H2 database for testing.</li>
                <li>Achieved 100% test pass rate across 20+ automated integration tests.</li>
              </ul>
            </li>
            <li>
              <strong>React E-Commerce App</strong>
              <ul className="list-disc list-inside ml-8 text-gray-600">
                <li>Developed a responsive front end for 100+ products with Firebase Authentication and Redux Toolkit.</li>
                <li>Achieved average load time of 0.8 seconds and a 97/100 Lighthouse performance score.</li>
              </ul>
            </li>
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
export default ResumeSection  