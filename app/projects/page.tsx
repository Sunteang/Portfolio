import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: "project-1",
      title: "YourHobby",
      description:
        "A platform offering a wide range of electronic devices, including smartphones, laptops, desktops, and headphones. It aims to provide customers with the latest gadgets at competitive prices while ensuring a smooth shopping experience.",
    },
    {
      id: "project-2",
      title: "YourStart",
      description:
        "A project focused on providing clients with market analysis and brand identity development services. It helps businesses gain insights into their markets and create a strong, memorable brand presence to succeed in a competitive environment.",
    },
    {
      id: "project-3",
      title: "Lowkey Style",
      description:
        "A platform offering a diverse collection of stylish and affordable clothing for men and women. It features a range of apparel from casual wear to formal attire, catering to different styles and preferences for every occasion.",
    },
  ];

  return (
    <div className="w-full mx-auto max-w-[1024px]">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#00ADB5]">
        My Projects
      </h2>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            <Link className="block" href={`/projects/${project.id}`}>
              <h3 className="text-3xl font-semibold text-[#00ADB5]">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
