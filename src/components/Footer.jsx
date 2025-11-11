import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
   
  const icons_array = [FaYoutube, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

  return (
    <footer className="bg-linear-to-b from-gray-900 via-black to-black py-12 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: logo + nav + socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-gray-800">
          {/* Brand / Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-300">Positivus</h2>
            <p className="text-gray-400 mt-2 text-sm md:w-2/3">
              Navigating the digital world for success.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-400 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#usecases" className="hover:text-white transition-colors">Use Cases</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          </nav>

          {/* Social icons */}
          <div className="flex justify-center gap-4 text-white">
            {icons_array.map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-white hover:text-black transition-all duration-200"
                aria-label="social link"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm pt-6">
          <p>© {new Date().getFullYear()} Positivus. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
