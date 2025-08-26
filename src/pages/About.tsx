import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2022-2026',
      title: 'B.E. in Information Technology',
      institution: 'Sal Engineering and Technical Institute',
      description: 'Specialized in AI and Data Science with coursework in algorithms and software engineering.',
    },
    {
      year: '2022',
      title: 'Higher Secondary Education',
      institution: 'Hebron Higher Secondary School',
      description: 'Completed with distinction in Mathematics and First-Class in Physics.',
    },
  ];

  const certifications = [
    {
      name: 'IBM Generative AI Internship',
      organization: 'IBM',
      year: '2025',
    },
    {
      name: 'Python-DJango Internship',
      organization: 'CreArt Solutions',
      year: '2025',
    },
    {
      name: 'Gen AI',
      organization: 'Hack2Skills + Google Cloud',
      year: '2025',
    },
    {
      name: 'Web Development',
      organization: 'Microsoft Student Ambassador Program',
      year: '2024',
    },
    {
      name: 'Ethical Hacking & Cybersecurity Workshop',
      organization: 'Pristine InfoSolution',
      year: '2022',
    },
    {
      name: '7+ IBM Badges in Data Science',
      organization: 'IBM Skillbuild',
      year: '2025',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
            About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto"></div>
        </div>

        {/* Bio Section */}
        <div className="mb-16 slide-up">
          <div className="portfolio-card">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-primary">
              My Journey
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              I am an Engineering Student in IT, and my coursework has ignited a passion for Artificial 
              Intelligence and Data Science. I am seeking to leverage my academic background and 
              hands-on experience to contribute to data-driven projects. My journey in technology 
              started with curiosity about how machines can learn and make decisions, leading me 
              to explore the fascinating world of AI and machine learning.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16 slide-up">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-center">
            Educational Milestones
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="portfolio-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <GraduationCap size={24} className="text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary mb-2 font-medium">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="slide-up">
          <h2 className="text-3xl font-heading font-semibold mb-8 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="portfolio-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground font-body">
                  {cert.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;