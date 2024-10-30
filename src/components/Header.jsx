import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">IAMDKELES BLOG</h1>

        {/* Toggle Button for Mobile and Tablet */}
        <button
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Menu Items */}
        <nav
          className={`flex-col md:flex-row md:flex md:items-center ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            href="#home"
            className="block md:inline-block px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            to="about"
            href="#about"
            className="block md:inline-block px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            About
          </Link>
          <Link
            to="projects"
            href="#projects"
            className="block md:inline-block px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Project
          </Link>
          <Link
            to="skills"
            href="#skills"
            className="block md:inline-block px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Skills
          </Link>
          <Link
            to="contact"
            href="#contact"
            className="block md:inline-block px-4 py-2 text-gray-700 hover:text-gray-900"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
