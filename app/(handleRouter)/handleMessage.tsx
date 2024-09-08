"use client";

import { useState } from "react";
import Button from "../components/atoms/Buttons/button1";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SendMessage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-9xl mx-auto p-8  ">
      {submitted ? (
        <p className="text-green-500 text-center">
          Your message has been sent!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-[#00ADB5] focus:border-[#00ADB5] transition duration-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-[#00ADB5] focus:border-[#00ADB5] transition duration-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Your Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-300 focus:ring-2 focus:ring-[#00ADB5] focus:border-[#00ADB5] transition duration-300"
              required
            />
          </div>
          <Button
            type="submit"
            className=" w-full py-3 bg-[#00ADB5] text-white font-semibold rounded-full shadow-lg hover:bg-[#09898E] transition duration-300"
          >
            Send Message <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </form>
      )}
    </div>
  );
}
