"use client";

import { useState } from "react";

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
            className="w-full py-3  bg-[#00ADB5] text-wh font-semibold rounded-full shadow-lg hover:bg-[#09898E] transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
