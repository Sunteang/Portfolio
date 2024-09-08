import Link from "next/link";
import HireMe from "./(handleRouter)/hireMe";
import SendMessage from "./(handleRouter)/handleMessage";
import Button from "./components/atoms/Buttons/button1";
import ProjectsFilter from "./(handleRouter)/projectFilter";

//contain all icons import
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//contain all image import
import Image from "next/image";
import about_image from "../app/images/group1-image/about_image.png";
import hero_image from "../app/images/group1-image/hero_image.png";
import contact_image from "../app/images/group1-image/contact_image.png";
import yourhobby from "../app/images/group2-image/yourhobby.jpg";
import yourstart from "../app/images/group2-image/yourstart.jpg";
import lowkeystyle from "../app/images/group2-image/yourlowkey.jpg";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center gap-[24rem] md:container mx-auto max-w-[1024px]">
      {/* Hero Section */}
      <section className="flex justify-between items-center gap-[10rem] w-full max-w-[1024px] mx-auto">
        <div className="flex flex-col">
          <div className=" text-7xl flex flex-col mb-9">
            <h1 className=" uppercase font-bold text-white">web</h1>
            <h1 className=" uppercase font-bold text-[#00ADB5]">developer</h1>
          </div>
          <div className="flex gap-4">
            <HireMe />

            <Link href="./Professional CV Resume.pdf" target="blank">
              <Button color={"portfolio_two"}>
                Download CV <FontAwesomeIcon icon={faDownload} />
              </Button>
            </Link>
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
      <ProjectsFilter />

      {/* Message Section */}
      <section className="w-full max-w-[1024px] mx-auto flex  justify-between gap-10 ">
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
