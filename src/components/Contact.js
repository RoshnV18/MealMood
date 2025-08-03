import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full min-h-screen bg-[#f6f6f6] p-4 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="text-center pb-8">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500 text-black">
            Contact
          </h2>
          <p className="text-sm sm:text-base mt-8  text-black">
            Want to get in touch? Submit the form below and I’ll get back to you
            soon.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/awnwpvdb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 bg-transparent border border-gray-400 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-3 bg-transparent border border-gray-400 rounded-md text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
              required
              className="p-3 bg-transparent border border-gray-400 rounded-md  text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 mt-8 mx-auto rounded-md font-semibold transition-transform transform hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
