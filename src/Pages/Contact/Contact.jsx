import React from 'react';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaCommentDots,
  FaHeadset,
} from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div id='contact' className="min-h-screen flex flex-col items-center justify-center bg-[#e9eefc] p-6">
      {/* Centered Title */}
      <div className="text-center mb-8">
        <div className="flex justify-center items-center text-3xl font-bold text-black">
          <FaHeadset className="mr-2" />
          Get In <span className="text-purple-600 ml-1">Touch</span>
        </div>
      </div>

      {/* Main Content: Image + Form */}
      <div className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden max-w-6xl w-full">
        {/* Left - Image */}
        <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
          <img
            src="https://i.ibb.co.com/gbG9hyqm/man-having-conference-call-his-260nw-1706178394.png"
            alt="Contact Illustration"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right - Form */}
        <div className="md:w-1/2 bg-white p-8">
          <form className="space-y-4">
            <div className="flex items-center border rounded-md px-3 py-2 bg-[#e9f0ff]">
              <FaUser className="text-gray-600 mr-3" />
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent focus:outline-none w-full"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 bg-[#e9f0ff]">
              <FaEnvelope className="text-gray-600 mr-3" />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent focus:outline-none w-full"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 bg-[#e9f0ff]">
              <FaPhone className="text-gray-600 mr-3" />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-transparent focus:outline-none w-full"
              />
            </div>

            <div className="flex items-start border rounded-md px-3 py-2 bg-[#e9f0ff]">
              <FaCommentDots className="text-gray-600 mr-3 mt-1" />
              <textarea
                placeholder="Message"
                className="bg-transparent focus:outline-none w-full h-24 resize-none"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#2200ff] text-white px-6 py-2 rounded-md hover:bg-[#1a00cc] transition"
              >
                Submit <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
