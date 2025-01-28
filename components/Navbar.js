'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const logo1 = '/images/logo1.png';
  const logo2 = '/images/logo2.png';

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            {logo1 && (
              <img
                src={logo1}
                alt="Logo 1"
                className="h-16 w-16 object-contain cursor-pointer"
                onClick={scrollToTop}
              />
            )}
            {logo2 && (
              <img
                src={logo2}
                alt="Logo 2"
                className="h-[12.25rem] w-[12.25rem] object-contain cursor-pointer"
                onClick={scrollToTop}
              />
            )}
          </div>

          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-indigo-600 cursor-pointer"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-indigo-600 cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="showcase"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-indigo-600 cursor-pointer"
            >
              Showcase
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-indigo-600 cursor-pointer"
            >
              Contact
            </ScrollLink>
            <a
              href="/enquiry"
              className="text-gray-800 hover:text-indigo-600 cursor-pointer"
              onClick={handleLinkClick}
            >
              Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="showcase"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Showcase
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={handleLinkClick}
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Contact
          </ScrollLink>
          <a
            href="/enquiry"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={handleLinkClick}
          >
            Enquiry
          </a>
        </div>
      )}
    </nav>
  );
}
