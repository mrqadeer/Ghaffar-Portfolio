import React from 'react';
import { Box, PenTool, Layers, Repeat, Code, CreditCard } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const skills: Skill[] = [
  {
    icon: <Box size={40} />,
    name: "3D Modeling",
    description: "Create detailed and accurate 3D models using Blender"
  },
  {
    icon: <Layers size={40} />,
    name: "3D Rendering",
    description: "Produce high-quality, photorealistic renders"
  },
  {
    icon: <Box size={40} />,
    name: "3D Product Visualization",
    description: "Showcase products in stunning 3D for marketing"
  },
  {
    icon: <PenTool size={40} />,
    name: "2D Artist",
    description: "Create compelling 2D artwork and illustrations"
  },
  {
    icon: <Repeat size={40} />,
    name: "UV Wrapping",
    description: "Expertly map 2D textures onto 3D models"
  },
  {
    icon: <Layers size={40} />,
    name: "CGI",
    description: "Generate computer graphics for various applications"
  },
  {
    icon: <Box size={40} />,
    name: "2D to 3D Conversion",
    description: "Transform 2D designs into 3D models"
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;