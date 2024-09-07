//projects with image and video details
"use client";

import { useParams } from "next/navigation";

const projectDetails: {
  "project-1": {
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    projectLink: string;
  };
  "project-2": {
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    projectLink: string;
  };
  "project-3": {
    title: string;
    description: string;
    content: string;
    imageUrl: string;
    projectLink: string;
  };
} = {
  "project-1": {
    title: "YourHobby",
    description:
      "This project is dedicated to providing a seamless and reliable platform for buying and selling a wide range of electronic devices, including smartphones, laptops, desktops, headphones, and more. Our mission is to offer customers the latest and most trusted gadgets at competitive prices, all while ensuring a smooth shopping experience. Whether you're looking for the newest tech or reliable accessories, this platform is your go-to destination for all your electronic needs.",
    content: "This is where you can add more in-depth content about Project 1.",
    imageUrl:
      "https://i.pinimg.com/originals/1f/0c/51/1f0c5136083b8c1f05a9fb1e58a196bd.jpg",
    projectLink: "https://your-hobby.vercel.app/",
  },
  "project-2": {
    title: "YourStart",
    description:
      "This project focuses on delivering comprehensive services to clients, specializing in market analysis and brand identity development. We help businesses gain deep insights into their target markets, understand consumer behavior, and identify growth opportunities. Our brand identity services are designed to create a strong and memorable presence for businesses, ensuring that they stand out in a competitive market. Whether you're looking to refine your strategy or build a brand from the ground up, our tailored solutions are here to support your business success.",
    content: "This is where you can add more in-depth content about Project 2.",
    imageUrl:
      "https://deerdesigner.com/wp-content/uploads/15384-Infinity-Healthcare-Services-Website-mockup-2.png",
    projectLink: "https://your-start.vercel.app/",
  },
  "project-3": {
    title: "Lowkey Style",
    description:
      "This project is dedicated to offering a diverse collection of men’s and women’s clothing that combines style, comfort, and quality. We curate a wide range of apparel, from casual wear to formal attire, ensuring there’s something for every occasion and personal taste. Our goal is to provide fashion-forward options that cater to different styles and preferences, all at accessible prices. Whether you're shopping for the latest trends or timeless classics, our platform is your destination for stylish and affordable clothing.",
    content: "This is where you can add more in-depth content about Project 3.",
    imageUrl:
      "https://mir-s3-cdn-cf.behance.net/projects/404/71756e195907401.Y3JvcCwxOTIwLDE1MDEsMCwxOQ.jpg",
    projectLink: "https://lowkey-fashion.vercel.app/",
  },
};

type ProjectID = keyof typeof projectDetails;

export default function ProjectDetailPage() {
  const params = useParams();
  const projectID = params.projectID as ProjectID;

  const project = projectDetails[projectID];

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-[1024px]">
      <h2 className="text-4xl font-bold mb-4 text-yellow-300">
        {project.title}
      </h2>
      <p className="text-gray-400 mb-6">
        {project.description}{" "}
        <span className="text-blue-300 ">
          {" "}
          <a href={project.projectLink} target="_blank">
            View Here.
          </a>
        </span>
      </p>

      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />
      )}
      <div className="text-gray-300">{project.content}</div>
    </div>
  );
}
