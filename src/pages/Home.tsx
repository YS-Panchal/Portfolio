import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import heroImage from '@/assets/headshot.png';

const Home = () => {
  return (
    <div className="hero-bg min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <div className="fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={heroImage}
              alt="Yash Panchal - Data Science Professional"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary shadow-2xl"
            />
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-glow">
              Hello, I'm Yash Panchal,{' '}
              <span className="text-primary">
                an Aspiring Data Scientist & Software Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-body mb-12 max-w-3xl mx-auto leading-relaxed">
              I'm a final-year IT student passionate about building intelligent solutions. 
              My goal is to apply my software development skills in the exciting field of Data Science.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/projects"
                className="btn-hero inline-flex items-center gap-2 group"
              >
                View My Work
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 group"
              >
                <Download size={20} className="transition-transform group-hover:-translate-y-1" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;