import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center space-y-8 ">
      <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Welcome to My Portfolio
      </h2>
      <p className="text-xl mb-6 text-gray-300">
        I am a passionate developer with skills in web development, data
        science, and more.
      </p>
      <Link
        className="inline-block px-8 py-4 font-semibold text-lg bg-yellow-500 text-gray-900 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
        href="/projects"
      >
        Check out my projects
      </Link>
    </div>
  );
}
