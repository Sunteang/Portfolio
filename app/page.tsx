import Link from "next/link";
import Image from "next/image";
import about_image from "../app/images/group1-image/about_image.png";
import hero_image from "../app/images/group1-image/hero_image.png";
import contact_image from "../app/images/group1-image/contact_image.png";
import HireMe from "./(handleRouter)/hireMe";
import SendMessage from "./(handleRouter)/handleMessage";
import Cv from "./(handleRouter)/Cv";
import Button from "./components/atoms/Buttons/button1";
import project1 from "../app/images/project_image/image1.jpeg";
import project2 from "../app/images/project_image/image2.jpeg";
import project3 from "../app/images/project_image/image3.jpeg";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center gap-[20rem] md:container mx-auto max-w-[1024px]">
      {/* Hero Section */}
      <section className="flex justify-between items-center gap-[10rem] w-full max-w-[1024px] mx-auto">
        <div className="flex flex-col">
          <div className=" text-7xl flex flex-col mb-9">
            <h1 className=" uppercase font-bold text-white">web</h1>
            <h1 className=" uppercase font-bold text-[#00ADB5]">developer</h1>
          </div>
          <div className="flex gap-4">
            <HireMe />
            <Cv />
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={hero_image} alt="hero image" className="w-[500px]" />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-[1024px] mx-auto flex justify-between items-center gap-16">
        <div className="flex-1">
          <h2 className="mb-6 text-[64px]">
            About <span className=" text-[#00ADB5]">Me</span>
          </h2>
          <p className="mb-4 text-lg">
            I am a developer with experience in various technologies including
            React, Next.js, and Python.
          </p>

          <p className="text-lg">
            I am a passionate web developer with a love for building innovative
            web applications. I thrive on exploring new technologies and enjoy
            taking on challenging projects that push the boundaries of my
            skills. My curiosity and dedication drive me to continuously learn
            and improve, making me adaptable to the ever-evolving landscape of
            web development.
          </p>
        </div>
        <div className="flex-1">
          <Image src={about_image} alt="about image" className="w-[600px]" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full max-w-[1024px] mx-auto flex flex-col justify-between gap-10">
        <h2 className="text-white text-[64px]">
          My Recent <span className="text-[#00ADB5]">Projects</span>
        </h2>
        <div className="flex gap-4">
          <Button color={"portfolio_one"}>All</Button>
          <Button color={"secondary"}>Web Applications</Button>
          <Button color={"secondary"}>Mobile Applications</Button>
        </div>
        <div className="flex gap-8">
          <Image
            src={project1}
            alt="project image"
            className="w-[200px] h-[300px] rounded-2xl"
          />
          <Image
            src={project2}
            alt="project image"
            className="w-[200px] h-[300px] rounded-2xl"
          />
          <Image
            src={project3}
            alt="project image"
            className="w-[200px] h-[300px] rounded-2xl"
          />
        </div>
      </section>

      {/* Message Section */}
      <section className="w-full max-w-[1024px] mx-auto flex  justify-between gap-10">
        <div className="flex flex-col items-center flex-1">
          <div className=" text-5xl flex flex-col mb-9">
            <h2 className=" text-white mb-4">Got a project in</h2>
            <h2 className=" text-[#00ADB5]">mind?</h2>
          </div>
          <div>
            <Image
              src={contact_image}
              alt="contact image "
              className="w-[300px]"
            />
          </div>
        </div>

        <div className="w-[800px] flex-1">
          <SendMessage />
        </div>
      </section>
    </main>
  );
}
