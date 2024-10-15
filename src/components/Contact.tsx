import React from 'react';
import { Mail, MapPin, Facebook, Instagram, Linkedin, Github } from 'lucide-react'; // Add Github

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="flex items-center mb-4">
              <Mail className="mr-4 text-blue-500" />
              <a href="mailto:ghaffarsieyam@gmail.com" className="hover:text-blue-400 transition">ghaffarsieyam@gmail.com</a>
            </div>
            <div className="flex items-center mb-4">
              <MapPin className="mr-4 text-blue-500" />
              <span>Mianwali,Punjab, Pakistan</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Connect with Me</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.facebook.com/profile.php?id=61566960759688" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-500 transition">
                <Facebook size={24} className="mr-2" />
                <span>Facebook</span>
              </a>
              <a href="https://www.github.com/sieyam" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition">
                <Github size={24} className="mr-2" />
                <span>Github</span>
              </a>
              <a href="https://www.instagram.com/sieyam3d_/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-pink-500 transition">
                <Instagram size={24} className="mr-2" />
                <span>Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/abdul-ghaffar-blender-expert-020822229/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-700 transition">
                <Linkedin size={24} className="mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;