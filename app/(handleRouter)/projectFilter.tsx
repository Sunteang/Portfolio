"use client";

import { useState } from "react";
import Button from "../../components/atoms/Buttons/button1";

//image
import Image from "next/image";
import yourhobby from "../images/group2-image/yourhobby.jpg";
import yourstart from "../images/group2-image/yourstart.jpg";
import yourlowkey from "../images/group2-image/yourlowkey.jpg";
import elearning from "../images/group2-image/elearning.png";
import lomnov from "../images/group2-image/lomnov_web.jpg";
import dashboard from "../images/group2-image/lomnov_dashboard.jpg";
import wedding from "../images/group2-image/wedding_service.jpg"

// Sample project data
const projects = [
  {
    id: 1,
    name: "Lomnov",
    category: "Web Application",
    image: lomnov,
  },
  {
    id: 2,
    name: "Your Hobby",
    category: "Web Application",
    image: yourhobby,
  },
  {
    id: 3,
    name: "YourStart",
    category: "Mobile Application",
    image: yourstart,
  },
  {
    id: 4,
    name: "Lowkey Style",
    category: "Web Application",
    image: yourlowkey,
  },
  {
    id: 5,
    name: "E-Learning App",
    category: "Mobile Application",
    image: elearning,
  },
  {
    id: 6,
    name: "Lomnov Dashboard",
    category: "Web Application",
    image: dashboard,
  },
  {
    id: 7,
    name: "Wedding Service App",
    category: "Mobile Application",
    image: wedding,
  },
];

export default function ProjectsFilter() {
  const [filter, setFilter] = useState("All");

  // Filtered projects based on the selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="w-full max-w-[1024px] mx-auto flex flex-col justify-between gap-10">
      <h2 className="text-white text-[64px]">
        My Recent <span className="text-[#00ADB5]">Projects</span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={() => setFilter("All")}
          color={filter === "All" ? "portfolio_one" : "portfolio_two"}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("Web Application")}
          color={
            filter === "Web Application" ? "portfolio_one" : "portfolio_two"
          }
        >
          Web Applications
        </Button>
        <Button
          onClick={() => setFilter("Mobile Application")}
          color={
            filter === "Mobile Application" ? "portfolio_one" : "portfolio_two"
          }
        >
          Mobile Applications
        </Button>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id} // Always use a unique key for list items
            className="bg-[#393E46] p-10 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
          >
            <h3 className="mb-4 text-[#00ADB5]">{project.name}</h3>
            <Image
              src={project.image}
              alt={project.name} // Use project name for alt
              className="rounded-md shadow-lg"
              width={280}
              height={200} // Add width and height for better optimization
            />
          </div>
        ))}
      </div>
    </section>
  );
}
