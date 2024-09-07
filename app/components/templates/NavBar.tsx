import Link from "next/link";

export default function NavBar() {
  return (
    <header className="bg-[#222831] py-8 border-b-2 border-b-gray-700">
      <nav className="md:container max-w-[1024px] mx-auto flex justify-around items-center">
        <h1 className="text-3xl tracking-wider text-white font-medium">
          <Link href="/">Sunteang Serey</Link>
        </h1>
        <ul className="flex space-x-8">
          <li>
            <Link
              className="hover:text-[#00ADB5] transition duration-300"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#00ADB5] transition duration-300"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#00ADB5] transition duration-300"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-[#00ADB5] transition duration-300"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
