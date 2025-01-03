"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faXTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#00ADB5]">
        Contact Me
      </h2>
      {submitted ? (
        <p className="text-green-500 text-center">
          Your message has been sent!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400"
            >
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#00ADB5] text-white font-semibold rounded-full shadow-lg hover:bg-[#09898E] transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}

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
