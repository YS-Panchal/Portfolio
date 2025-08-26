import { Code, Server, Brain, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS', 'Flask'],
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} />,
      skills: ['Python', 'Django', 'Node JS'],
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain size={24} />,
      skills: ['Hugging Face API', 'Gemini API', 'Granite, by IBM', 'WatsonX'],
      color: 'from-primary to-primary-glow',
    },
    {
      title: 'Databases & Tools',
      icon: <Database size={24} />,
      skills: ['MySQL', 'Git'],
      color: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-glow">
            Skills & Expertise
          </h1>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            A snapshot of my Technical Skills and Tools that I use to build modern, 
            efficient, and scalable solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="portfolio-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <h2 className="text-xl font-heading font-semibold">
                  {category.title}
                </h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border/50 hover:border-primary/50 transition-colors duration-300"
                  >
                    <span className="font-body font-medium text-foreground">
                      {skill}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-4 border-t border-border/30">
                <p className="text-sm text-muted-foreground font-body">
                  {category.skills.length} Technologies Mastered
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center slide-up">
          <div className="portfolio-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-primary">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              I'm constantly expanding my skillset through online courses, personal projects, 
              and hands-on experience. My focus is on staying updated with the latest 
              technologies in AI, machine learning, and web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;