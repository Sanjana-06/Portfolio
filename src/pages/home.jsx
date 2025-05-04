import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar";
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaDocker } from 'react-icons/fa';
import { DiPostgresql, DiMongodb, DiJenkins, DiAws } from 'react-icons/di';
import { SiTailwindcss, SiSpringboot, SiPostman } from 'react-icons/si'


export default function Home() {
  const [text, setText] = useState('');
  const fullText = "Hi, I'm Sanjana...";
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setText((prev) => {
        const nextChar = fullText.charAt(indexRef.current);
        indexRef.current += 1;
        if (indexRef.current >= fullText.length) {
          clearInterval(intervalRef.current);
        }
        return prev + nextChar;
      });
    }, 100);

    return () => clearInterval(intervalRef.current); 
  }, []);

  function isValidEmail(email) {
    // Simple regex for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white font-montserrat">
      {/* Navbar Component */}
      <Navbar />
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Hero Section */}
      <section className="mt-0 flex items-center justify-center h-screen px-6 text-center relative z-10" id="home">
        <div>
          {/* ✨ Typing Animation */}
          <h2 className="text-4xl md:text-4xl font-extrabold mb-4">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-300 mb-6">A Passionate Full Stack Developer</p>
          
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-full font-medium"
            >
              Contact Me
            </a>
            <a
              href="/assets/Sanjana_S_Resume.pdf"
              target="_blank"
              className="border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-full font-medium"
            >
              Download Resume
            </a>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center gap-8 mt-8">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/Sanjana0602" // Replace with your LinkedIn profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-500 text-3xl"
            >
              <FaLinkedin />
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/Sanjana-06" // Replace with your GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-500 text-3xl"
            >
              <FaGithub />
            </a>
            {/* LeetCode Icon */}
            <a
              href="https://leetcode.com/Sanj_06" // replace with your LeetCode URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-500 text-3xl"
            >
              <FaCode />
            </a>
          </div>

        </div>
      </section>




      {/* About Section */}
      <section id="about" className="relative z-10 px-6 py-20 text-white">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-left mr-4 ml-10">About Me</h2>
        </div>
        <div className="text-justify ml-10 mr-10">
        <p className="text-lg md:text-xl w-full text-justify mb-6">
          I am a passionate Software Developer with hands-on experience in backend development, cloud technologies, and automation. Through internships at FIS, Schneider Electric, Alstom, and Orom, I have worked on real-world projects involving APIs, DevOps workflows, data integration, and cloud-based solutions. I enjoy solving complex problems, streamlining processes, and continuously learning new technologies. My strong foundations in AWS, Docker, and backend systems has enabled me to contribute effectively to team goals, optimize workflows, and improve the efficiency of development processes.
        </p>
        <p className="text-lg md:text-xl w-full text-justify">
          Currently, I am focused on growing my skills as a DevOps Engineer, aiming to drive efficient, scalable solutions. I have developed key software solutions, including automation scripts, API enhancements, and data visualization tools. With a solid foundation in backend development and cloud technologies, I am dedicated to improving processes and building innovative systems. My goal is to leverage my skills and experience to contribute to impactful projects that push the boundaries of technology.
        </p>
        </div>
        
      </section>




      <section id="skills" className="relative z-10 px-6 py-20 text-white">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-left mr-4 ml-10 mb-10">Technical Skills</h2>
        </div>

        <div className="space-y-12">
          {/* Row 1 */}
          <div className="flex justify-center gap-20 flex-wrap">
            {[
              { icon: <FaJava className="w-18 h-18 text-yellow-500" />, name: "Java" },
              { icon: <FaHtml5 className="w-18 h-18 text-orange-600" />, name: "HTML5" },
              { icon: <FaCss3Alt className="w-18 h-18 text-blue-500" />, name: "CSS3" },
              { icon: <FaJs className="w-18 h-18 text-yellow-400" />, name: "JavaScript" },
              { icon: <FaReact className="w-18 h-18 text-blue-600" />, name: "React" },
              { icon: <FaGit className="w-18 h-18 text-orange-600" />, name: "Git" },
            ].map(({ icon, name }) => (
              <div className="flex flex-col items-center hover:animate-bounce" key={name}>
                {icon}
                <p className="mt-2 text-sm">{name}</p>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-20 flex-wrap">
            {[
              { icon: <FaNodeJs className="w-18 h-18 text-green-500" />, name: "Node.js" },
              { icon: <SiTailwindcss className="w-18 h-18 text-teal-400" />, name: "Tailwind CSS" },
              { icon: <SiSpringboot className="w-18 h-18 text-green-600" />, name: "Spring Boot" },
              { icon: <DiPostgresql className="w-18 h-18 text-blue-700" />, name: "PostgreSQL" },
              { icon: <FaGithub className="w-18 h-18 text-white" />, name: "GitHub" },
            ].map(({ icon, name }) => (
              <div className="flex flex-col items-center hover:animate-bounce" key={name}>
                {icon}
                <p className="mt-2 text-sm">{name}</p>
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-20 flex-wrap">
            {[
              { icon: <DiMongodb className="w-18 h-18 text-green-700" />, name: "MongoDB" },
              { icon: <DiAws className="w-18 h-18 text-orange-600" />, name: "AWS" },
              { icon: <FaDocker className="w-18 h-18 text-cyan-600" />, name: "Docker" },
              { icon: <DiJenkins className="w-18 h-18 text-orange-500" />, name: "Jenkins" },
              { icon: <img src="/assets/New_Power_BI_Logo.svg" alt="Power BI" className="w-18 h-18" />, name: "Power BI" },
              { icon: <SiPostman className="w-18 h-18 text-orange-500" />, name: "Postman" },
            ].map(({ icon, name }) => (
              <div className="flex flex-col items-center hover:animate-bounce" key={name}>
                {icon}
                <p className="mt-2 text-sm">{name}</p>
              </div>
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex justify-center gap-20 flex-wrap">
          </div>

        </div>
      </section>

      {/* Experience Section */}
        <section id="experience" className="relative z-10 px-6 py-20 text-white">
          <div className="flex items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-left ml-10">Experience</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-18 mx-10">
            {/* FIS Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg p-6 w-full sm:w-[90%] md:w-[50%] lg:w-[35%] hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
                <img src="/assets/fis.jpg" alt="FIS Logo" className="w-14 h-14" />
                <div>
                  <h3 className="text-l font-semibold  text-cyan-400">FIS-Fidelity National Information Service</h3>
                  <p className="text-sm text-gray-400">Jan 2025 - Present · Chennai, TN</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-white space-y-2 text-justify">
                <li>Contributed to fulfilling client requests by deploying specific APIs based on business requirements.</li>
                <li>Automated a multi-step task by integrating functionalities, validating scripts, and streamlining Bitbucket
                operations through scripted processes.</li>
                <li>Developed an internal chatbot using Google FLAN-T5 and Sentence Transformers to assist client queries.</li>
              </ul>
            </div>

            {/* Schneider Electric Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg p-6 w-full sm:w-[90%] md:w-[50%] lg:w-[35%] hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
                <img src="/assets/schneider.jpg" alt="Schneider Logo" className="w-12 h-12" />
                <div>
                  <h3 className="text-l font-semibold  text-cyan-400">Schneider Electric</h3>
                  <p className="text-sm text-gray-400">Aug 2024 - Dec 2024 · Bengaluru, KA</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-white space-y-2 text-justify">
                <li>Developed a scalable tag management project in AWS, achieving a reduction in deployment time.</li>
                <li>Acquired comprehensive foundational expertise in AWS services, Docker, and serverless frameworks,contributing to a
                  increase in deployment efficiency.</li>
                <li>Gained experience with project management and development tools like JIRA,
                Confluence, and JFROG.</li>
              </ul>
            </div>

            {/* Alstom Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg p-6 w-full sm:w-[90%] md:w-[50%] lg:w-[35%] hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
                <img src="/assets/alstom.jpg" alt="Alstom Logo" className="w-14 h-14" />
                <div>
                  <h3 className="text-l font-semibold  text-cyan-400">Alstom</h3>
                  <p className="text-sm text-gray-400">May 2024 - Jul 2024 · Bangalore, KA</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-white space-y-2 text-justify">
                <li>Assisted in the development of a collaborative Q&A platform enabling users to ask and answer technical queries.</li>
                <li>Contributed to the backend development by setting up RESTful APIs, implementing user authentication, and managing PostgreSQL database connections.</li>
                <li>Created comprehensive project documentation to enhance clarity, tracking, and communication across teams.</li>
              </ul>
            </div>

            {/* Orom Corp Card */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg p-6 w-full sm:w-[90%] md:w-[50%] lg:w-[35%] hover:scale-105 transition-transform">
            <div className="flex items-center gap-4 mb-4">
                <img src="/assets/orom.jpg" alt="Orom Corp Logo" className="w-12 h-12" />
                <div>
                  <h3 className="text-l font-semibold text-cyan-400">Orom Corp</h3>
                  <p className="text-sm text-gray-400">Jan 2024 - Apr 2024 · Vellore, TN</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-sm text-white space-y-2 text-justify">
                <li>Acquired foundational knowledge of backend technologies, focusing on database management and SQL query writing
                  which contributed to a reduction in query execution time.</li>
                <li>Constructed relational databases, ensuring data storage and retrieval, resulting in a increase in performance.</li>
                <li>Optimized SQL queries and implemented CRUD operations for seamless database connectivity and management.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative z-10 px-6 py-20 text-white">
          <div className="flex items-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-left mr-4 ml-10 mb-10">Projects</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 px-10">
            {/* Project 1: FinSage */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg p-6 w-full md:w-96 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">FinSage</h3>
              <p className="text-sm mb-4 text-gray-300">
              Your intelligent financial assistant powered by AI, providing personalized investment recommendations and real-time insights for beginners and salaried professionals.
              </p>
              <p className="text-sm mb-2 text-gray-300 italic"><b>Tech Stack: </b>ReactJS, Flask, D3.js, SQLite, TensorFlow</p>
              <a 
                href="https://github.com/Sanjana-06/FinSage" 
                target="_blank" 
                className="inline-block mt-4 px-4 py-2 border border-cyan-500 text-cyan-500 rounded hover:bg-cyan-500 hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                Code View
              </a>
            </div>

            {/* Project 2: VNV Overflow */}
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl shadow-lg p-6 w-full md:w-96 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">VNV Overflow</h3>
              <p className="text-sm mb-4 text-gray-300">
              A collaborative Q&A platform for technical queries, enabling users to ask questions, share expertise, and find solutions, inspired by the Stack Overflow community model.
              </p>
              <p className="text-sm mb-2 text-gray-300 italic"><b>Tech Stack: </b>Javascript, C#, Angular, PostgresSQL</p>
              <a 
                href="https://github.com/Sanjana-06/V-VOverflow" 
                target="_blank" 
                className="inline-block mt-4 px-4 py-2 border border-cyan-500 text-cyan-500 rounded hover:bg-cyan-500 hover:text-white transition-colors"
                rel="noopener noreferrer"
              >
                Code View
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */} 
      <section id="contact" className="relative z-10 px-6 py-20 text-white ">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.email.value.trim();
              if (!isValidEmail(email)) {
                alert("Please enter a valid email address.");
              } else {
                alert("Thank you for contacting!");
                e.target.reset(); // Optional: clear form
              }
            }}
            className="space-y-4"
          >
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-white/15 backdrop-blur-lg text-white placeholder-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-white/15 backdrop-blur-lg text-white placeholder-white"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 rounded-md bg-white/15 backdrop-blur-lg text-white placeholder-white"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-md font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
        
      </section>

    </div>
  );
}
