import Link from "next/link";
import { faHome, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-[#222831] text-gray-400 p-6 flex flex-col items-center gap-8 border-t-2 border-t-gray-700 mt-20">
      <ul className="flex space-x-8  mt-8">
        <li>
          <Link
            className="hover:text-[#00ADB5] transition duration-300 "
            href="/"
          >
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#00ADB5] transition duration-300"
            href="/about"
          >
            <FontAwesomeIcon icon={faUser} /> About
          </Link>
        </li>

        <li>
          <Link
            className="hover:text-[#00ADB5] transition duration-300"
            href="/contact"
          >
            <FontAwesomeIcon icon={faPhone} /> Contact
          </Link>
        </li>
      </ul>
      <ul className="flex space-x-8 text-2xl">
        <li>
          <Link
            className="hover:text-[#00ADB5] transition duration-300"
            href="https://www.facebook.com/sunt.teang"
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#00ADB5] transition duration-300"
            href="https://www.instagram.com/_____krizzz/"
            target="blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>

        <li>
          <Link
            className="hover:text-[#00ADB5] transition duration-300"
            href="https://x.com/Teggga92283"
            target="blank"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#00ADB5] transition duration-300"
            href="https://github.com/Sunteang"
            target="blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
      </ul>

      <div className="flex flex-col items-center border-t-2 border-t-gray-700">
        <p className="text-sm my-4 ">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
