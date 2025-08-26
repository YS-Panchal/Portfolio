import { ExternalLink, Github } from 'lucide-react';
import digiRailImg from "@/assets/pwg.png";
import pozy from "@/assets/pozy.png";
import port from "@/assets/port.png";


const Projects = () => {
  const projects = [
    {
      title: 'Personalized Workout Plan Generator',
      description: 'This AI-powered web app creates personalized workout and meal plans tailored to your specific fitness goals. It acts as a virtual personal trainer, providing a comprehensive and customized experience to help you achieve your health and wellness objectives.',
      image:digiRailImg,
      technologies: ['Python', 'Gemini', 'Flask', 'Render'],
      demoUrl: 'https://personalized-workout-generator1-1.onrender.com',
      githubUrl: 'https://github.com/YS-Panchal/personalized-workout-generator.git',
    },
    {
      title: 'Portfolio Website',
      description: 'This React.js-powered portfolio website showcases my projects, skills, and experiences in a modern and interactive way. It acts as a personal brand hub, providing a clean, engaging, and customizable experience for visitors to explore my work and connect with me.',
      image:port,
      technologies: ['ReactJS', 'HTML5', 'Vercel'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/data-dashboard',
    },
    {
      title: 'Digi-Rail',
      description: 'This web app simplifies train travel by enabling users to book tickets, explore routes, and create customized travel packages. Acting as a smart travel companion, it provides a seamless and personalized booking experience to make train journeys more convenient and enjoyable.',
      image:pozy,
      technologies: ['React JS', 'Node JS', 'JSON', 'Vercel'],
      demoUrl: 'https://pozy-trains.vercel.app',
      githubUrl: 'https://github.com/YS-Panchal/PozyTrains',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
            Academic & Personal Projects
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            A collection of projects showcasing my skills in data science, designing, API's,  
            and web development. Each project represents a unique challenge and learning experience.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
             {/* Project Image */}
<div className="relative overflow-hidden rounded-lg mb-6 group">
  {/* Project Image */}
  <img
    src={project.image}   // 👈 this will come from your projects array
    alt={project.title}
    className="w-full h-48 object-cover"
  />

  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground font-body leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero flex-1 justify-center inline-flex items-center gap-2 text-sm py-3"
                  >
                    <ExternalLink size={16} />
                    View Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex-1 justify-center inline-flex items-center gap-2 text-sm py-3"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center slide-up">
          <div className="portfolio-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              I'm constantly working on new projects and exploring cutting-edge technologies. 
              Check back regularly to see my latest work in AI, data science, and web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;