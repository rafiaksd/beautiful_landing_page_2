import React from "react";
import contactGraphic from "../assets/contact.png"; // replace with your decorative graphic

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 md:w-2/3">
          <div className="shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <div>
            <p className="text-secondary">
              Connect with Us: <br /> Let’s Discuss Your Digital Marketing Needs
            </p>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="bg-linear-to-b from-gray-50 to-primary border border-primary rounded-xl shadow-lg relative overflow-hidden">

          <div className="grid md:grid-cols-2">
            {/* Left side: Form */}
            <div className="p-8 md:p-12">
              {/* Radio options */}
              <div className="flex items-center gap-6 mb-8">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactType"
                    defaultChecked
                    className="accent-primary"
                  />
                  <span className="text-gray-700 font-bold text-xl">Say Hi</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="contactType" className="accent-primary" />
                  <span className="text-gray-700 font-bold text-xl">Get a Quote</span>
                </label>
              </div>

              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-lg font-bold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Mr. X"
                    className="w-full border border-gray-500 rounded-md px-4 py-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-lg font-bold text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email..."
                    required
                    className="w-full border border-gray-500 rounded-md px-4 py-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-lg font-bold text-gray-700 mb-2">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter message..."
                    rows="5"
                    required
                    className="w-full border border-gray-500 rounded-md px-4 py-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-150"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right side: Graphic */}
            <div className="hidden md:flex justify-center items-center relative">
              <img
                src={contactGraphic}
                alt="Decorative graphic"
                className="absolute right-10 w-[60%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
