import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: "project-1",
      title: "Lomnov, RealEstate",
      description:
        "Lomnov is a trusted real estate provider specializing in buying, selling, renting, and investing in properties. Our team is committed to offering exceptional service, with a focus on transparency, trust, and integrity. We help clients navigate the real estate market with ease, offering tailored solutions for residential and commercial properties.",
    },
    {
      id: "project-2",
      title: "YourHobby",
      description:
        "A platform offering a wide range of electronic devices, including smartphones, laptops, desktops, and headphones. It aims to provide customers with the latest gadgets at competitive prices while ensuring a smooth shopping experience.",
    },
    {
      id: "project-3",
      title: "YourStart",
      description:
        "A project focused on providing clients with market analysis and brand identity development services. It helps businesses gain insights into their markets and create a strong, memorable brand presence to succeed in a competitive environment.",
    },
    {
      id: "project-4",
      title: "Lowkey Style",
      description:
        "A platform offering a diverse collection of stylish and affordable clothing for men and women. It features a range of apparel from casual wear to formal attire, catering to different styles and preferences for every occasion.",
    },
    {
      id: "project-5",
      title: "E-Learning",
      description:
        "The E-Learning app offers a wide variety of educational videos, making learning accessible to everyone. Users can explore topics and enhance their skills by watching engaging content at their convenience.",
    },
    {
      id: "project-6",
      title: "Lomnov Dashboard",
      description:
        "Lomnov Dashboard is your one-stop solution for buying, selling, renting, or investing in real estate. It offers property listings, tailored insights, and tools to manage transactions effortlessly, all with Lomnov`s trusted commitment to transparency and exceptional service.",
    },
  ];

  return (
    <div className="w-full mx-auto max-w-[1024px]">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">
        My <span className="text-[#00ADB5]">Projects</span>
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
