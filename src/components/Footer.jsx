import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: logo + nav + socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-gray-300">
          {/* Brand / Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-secondary">Positivus</h2>
            <p className="text-gray-600 mt-2 text-sm md:w-2/3">
              Navigating the digital world for success.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#usecases" className="hover:text-primary transition-colors">Use Cases</a>
            <a href="#team" className="hover:text-primary transition-colors">Team</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-4 text-black">
            <a href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-black transition-all duration-200">
              <FaFacebookF className="size-5" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-black transition-all duration-200">
              <FaTwitter className="size-5" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-black transition-all duration-200">
              <FaInstagram className="size-5" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full hover:bg-primary hover:text-black transition-all duration-200">
              <FaLinkedinIn className="size-5" />
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm pt-6">
          <p>© {new Date().getFullYear()} Positivus. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
