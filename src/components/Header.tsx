import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ghaffar Sieyam</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" className="hover:text-blue-400 transition" onClick={toggleMenu}>Home</a>
            <a href="#about" className="hover:text-blue-400 transition" onClick={toggleMenu}>About</a>
            <a href="#services" className="hover:text-blue-400 transition" onClick={toggleMenu}>Services</a>
            <a href="#projects" className="hover:text-blue-400 transition" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition" onClick={toggleMenu}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;