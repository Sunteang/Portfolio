import Image from "next/image";
import Profile from "../images/my_profile.jpeg";

export default function AboutPage() {
  return (
    <div className="p-8 mx-auto max-w-[1024px]">
      {/* Profile and Introduction */}
      <div className="flex items-center space-x-8 mb-8">
        <Image
          src={Profile}
          alt="Profile"
          width={130}
          height={130}
          className="w-34 h-34 rounded-full shadow-md"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">About <span className="text-[#00ADB5]">Me</span></h2>
          <p className="mb-4 text-gray-300">
            I am a passionate Computer Science student and a full-stack web
            developer with hands-on experience in building dynamic and
            innovative applications. Currently, I am pursuing my bachelor&apos;s
            degree at the University of Cambodia and enhancing my skills through
            SabaiCode Bootcamp.
          </p>
          <p className="text-gray-400">
            I am driven by a love for solving problems and a desire to create
            impactful web applications. With a strong foundation in computer
            science principles, I enjoy exploring emerging technologies and
            thrive in collaborative, fast-paced environments.
          </p>
        </div>
      </div>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Education</h3>
        <ul className="text-gray-300">
          <li>
            <strong>University of Cambodia</strong> - Bachelor&apos;s in Computer
            Science
          </li>
          <li>
            <strong>SabaiCode Bootcamp</strong> - Full-Stack Development
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Experience</h3>
        <ul className="text-gray-300 space-y-2">
          <li>
            <strong>Frontend Apprentice – WingBank</strong> (6 months) – 
            Worked in a collaborative development team to build and maintain internal banking web applications. 
            Focused on creating responsive, accessible, and user-friendly UIs using React JS, Next JS, TypeScript, and Tailwind CSS. 
            Gained hands-on experience in real-world frontend development and design system implementation.
          </li>
          <li>
            <strong>Full-Stack Web Developer – SabaiCode Bootcamp</strong> – 
            Completed intensive full-stack training covering front-end and back-end development. 
            Built dynamic applications using React, Next.js, TypeScript, and Tailwind CSS on the front-end, 
            and Node.js, Express, and MongoDB on the back-end. Also deployed CI/CD pipelines using Docker and AWS 
            and practiced version control with Git and GitHub.
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Skills</h3>
        <ul className="text-gray-300">
          <li>Front-End: React, Next.js, TypeScript, Tailwind CSS</li>
          <li>Back-End: Node.js, Express, TSOA, RESTful APIs, MongoDB</li>
          <li>DevOps: Docker, AWS, CI/CD pipelines</li>
          <li>Testing: Storybook, Jest</li>
        </ul>
      </section>

      {/* Soft Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Soft Skills</h3>
        <ul className="text-gray-300">
          <li>Problem-solving</li>
          <li>Adaptability</li>
          <li>Collaboration</li>
          <li>Continuous learning</li>
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Languages</h3>
        <ul className="text-gray-300">
          <li>Khmer (Native)</li>
          <li>English (Fluent)</li>
        </ul>
      </section>

      {/* Interests */}
      <section>
        <h3 className="text-2xl font-semibold text-[#00ADB5] mb-4">Interests</h3>
        <ul className="text-gray-300">
          <li>Exploring new technologies</li>
          <li>Building innovative web applications</li>
          <li>Problem-solving challenges</li>
        </ul>
      </section>
    </div>
  );
}
