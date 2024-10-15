import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Projects.css';
import proj1Image from '../assets/images/proj_1_glassy.png';
import proj2Image from '../assets/images/proj_2_2d.png';
import proj3Image from '../assets/images/proj_3_milky-bottle.png';
import proj4Image from '../assets/images/proj_4_perfume.png';
import proj5Image from '../assets/images/proj_5_jell.png';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Indoor Lightining HDRI-Render",
    description: "Whisky Sweatness non-alcoholic cyclic render",
    imageUrl: proj1Image,
    githubUrl: "https://github.com/sieyam3d/indoor-lighting-hdri-render"
  },
  {
    id: 2,
    title: "3D Character Animation",
    description: "A fully animated 3D character.",
    imageUrl: proj2Image,
    githubUrl: "https://github.com/sieyam/3d-charactor-animation"
  },
  {
    id: 3,
    title: "Product Visualization",
    description: "Photorealistic render of a new fresh milky bottle.",
    imageUrl: proj3Image,
    githubUrl: "https://github.com/sieyam/milky-bottle"
  },
  {
    id: 4,
    title: "3D Product Modeling",
    description: "Valentino Uomo 2021 photorealistic render.",
    imageUrl: proj4Image,
    githubUrl: "https://github.com/sieyam/valentino-uomo-2021"
  },
  {
    id: 5,
    title: "Label Texturing & UV Wrapping",
    description: "Alo vera Gel Bottle realistic presentation.",
    imageUrl: proj5Image,
    githubUrl: "https://github.com/sieyam/alovera-gel-bottle"
  }
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 z-10"
    >
      <ChevronRight size={24} />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300 z-10"
    >
      <ChevronLeft size={24} />
    </button>
  );
};

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="relative px-12">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="px-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out h-full"
                >
                  <div className="h-96 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;