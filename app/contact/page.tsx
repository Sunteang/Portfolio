"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import contact_cover from "../images/cover_image.jpg"
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-white">
        Contact <span className="text-[#00ADB5]">Me</span>
      </h2>
      
      <div className="text-center text-gray-300 text-lg mb-6">
        <p className="mb-4">Have a question or want to collaborate? Feel free to reach out!</p>
        <p>Email: <a href="mailto:sereysunteang@gmail.com" className="text-[#00ADB5] hover:underline">sereysunteang@gmail.com</a></p>
        <p>Website: <a href="https://sunteang101.wordpress.com/" target="_blank" rel="noopener noreferrer" className="text-[#00ADB5] hover:underline">sunteang101.wordpress.com</a></p>
      </div>
      
      {/* Image Section */}
      <div className="flex justify-center mb-6">
        <Image src={contact_cover} alt="Contact Illustration" className="rounded-lg shadow-lg w-full max-w-md" />
      </div>

      {/* Social Media Section */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-300 mb-4">
          Connect with me on social media
        </h3>
        <ul className="flex justify-center space-x-8 text-2xl">
          <li>
            <a
              href="https://www.facebook.com/sunt.teang"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ADB5] transition duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_____krizzz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ADB5] transition duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sunteangserey/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ADB5] transition duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Sunteang"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ADB5] transition duration-300"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
