import React from 'react';
import { ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80")'}}>
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Ghaffar Sieyam</h1>
        <p className="text-2xl md:text-3xl mb-8">Blender 3D Artist</p>
        <a href="#about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Learn More
        </a>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Home;