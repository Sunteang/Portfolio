"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

// Project details with updated image field
const projectDetails = {
  "project-1": {
    title: "Lomnov, RealEstate",
    description:
      "Lomnov is a trusted real estate provider specializing in buying, selling, renting, and investing in properties. Our team is committed to offering exceptional service, with a focus on transparency, trust, and integrity. We help clients navigate the real estate market with ease, offering tailored solutions for residential and commercial properties.",

    imageUrl:
      "https://i.pinimg.com/originals/9a/ab/7c/9aab7cb73f7cd3f7263994e255592c49.jpg",
    projectLink: "https://d7sbnt81ln46j.cloudfront.net/en",
  },
  "project-2": {
    title: "YourHobby",
    description:
      "This project is dedicated to providing a seamless and reliable platform for buying and selling a wide range of electronic devices, including smartphones, laptops, desktops, headphones, and more. Our mission is to offer customers the latest and most trusted gadgets at competitive prices, all while ensuring a smooth shopping experience.",

    imageUrl:
      "https://i.pinimg.com/originals/74/c0/3d/74c03d4b0d7a416d443f257edd2e0e57.jpg",
    projectLink: "https://your-hobby.vercel.app/",
  },
  "project-3": {
    title: "YourStart",
    description:
      "This project focuses on delivering comprehensive services to clients, specializing in market analysis and brand identity development.",

    imageUrl:
      "https://i.pinimg.com/originals/5e/17/74/5e1774753ae2655db71d16095a9a52e8.jpg",
    projectLink: "https://your-start.vercel.app/",
  },
  "project-4": {
    title: "Lowkey Style",
    description:
      "This project is dedicated to offering a diverse collection of men's and women's clothing that combines style, comfort, and quality.",

    imageUrl:
      "https://i.pinimg.com/originals/b5/aa/ee/b5aaee5596b2f859efa828f741dd4ff0.jpg",
    projectLink: "https://lowkey-fashion.vercel.app/",
  },
  "project-5": {
    title: "E-Learning App",
    description:
      "The E-Learning app provides a rich library of videos for users to easily learn new skills and topics. It's an accessible platform that allows everyone to watch and learn at their own pace.",

    imageUrl:
      "https://i.pinimg.com/originals/50/aa/d3/50aad3fd652c199512a7225578b792ec.jpg",
    projectLink: "https://e-learning.vercel.app/",
  },
  "project-6": {
    title: "Lomnov Dashboard",
    description:
      "Lomnov Dashboard is your one-stop solution for buying, selling, renting, or investing in real estate. It offers property listings, tailored insights, and tools to manage transactions effortlessly, all with Lomnov’s trusted commitment to transparency and exceptional service.",

    imageUrl:
      "https://i.pinimg.com/originals/f9/49/0f/f9490f3a2dd597b193645b4dd9454e06.jpg",
    projectLink: "https://dtngpr0392qj9.cloudfront.net/signIn",
  },
  "project-7": {
    title: "Wedding Service App",
    description:
      "The Wedding Service App was created to simplify the process of finding services (e.g., wedding bands, photography, bridal makeup, wedding venues, wedding dresses, florists, decorations, and all other wedding-related services) that were previously difficult to locate. The app provides comprehensive information about a wide range of wedding-related services currently available in Cambodia. It ensures speed, reliability, and quality to help couples manage their wedding planning effectively. Additionally, it makes it easier for service providers to connect with potential customers.",

    imageUrl:
      "https://i.pinimg.com/736x/01/96/e1/0196e1a0581aa0b7bdd10796bb7353d7.jpg",
    projectLink: "https://github.com/Sunteang/Wedding_Service-Flutter_app.git",
  },
};

type ProjectID = keyof typeof projectDetails;

export default function ProjectDetailPage() {
  const params = useParams();
  const projectID = params?.projectID as ProjectID;

  const project = projectDetails[projectID];

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-[1024px]">
      <h2 className="text-4xl font-bold mb-4 text-[#00ADB5]">
        {project.title}
      </h2>
      <p className="text-gray-400 mb-6">
        {project.description}{" "}
        <span className="text-blue-300">
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Here.
          </a>
        </span>
      </p>

      {/* Render the project image */}
      {project.imageUrl && (
        <Image
        src={project.imageUrl}
        alt={project.title}
        width={800} 
        height={600}
        className="w-full h-auto mb-6 rounded-lg shadow-md"
        unoptimized 
      />
      )}
    </div>
  );
}
