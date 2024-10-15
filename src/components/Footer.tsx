import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Ghaffar Sieyam. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61566960759688" target="_blank"  className="text-gray-400 hover:text-blue-400 transition"><Facebook size={24} /></a>
            <a href="https://www.github.com/sieyam" target="_blank" className="text-gray-400 hover:text-blue-400 transition"><Github size={24} /></a>
            <a href="https://www.instagram.com/sieyam3d_/" target="_blank" className="text-gray-400 hover:text-blue-400 transition"><Instagram size={24} /></a>
            <a href="https://www.linkedin.com/in/abdul-ghaffar-blender-expert-020822229/" target="_blank" className="text-gray-400 hover:text-blue-400 transition"><Linkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;