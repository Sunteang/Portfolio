import Image from "next/image";
import myprofile from "../images/teang_image.webp";

export default function AboutPage() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex items-center mx-auto max-w-[1024px] space-x-8">
      <Image
        src={myprofile}
        alt="Profile"
        className="w-32 h-32 rounded-full shadow-md"
      />

      <div>
        <h2 className="text-4xl font-bold mb-4 text-[#00ADB5]">About Me</h2>
        <p className="mb-4 text-gray-300">
          I am a developer with experience in various technologies including
          React, Next.js, and Python.
        </p>
        <p className="text-gray-400">
          I am a passionate web developer with a love for building innovative
          web applications. I thrive on exploring new technologies and enjoy
          taking on challenging projects that push the boundaries of my skills.
          My curiosity and dedication drive me to continuously learn and
          improve, making me adaptable to the ever-evolving landscape of web
          development.
        </p>
      </div>
    </div>
  );
}
