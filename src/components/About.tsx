
import React from 'react';
import { CodeIcon, MonitorIcon, WandIcon, SmileIcon } from 'lucide-react';

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 border border-border rounded-xl bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const About = () => {
  const skills: SkillProps[] = [
    {
      icon: <CodeIcon size={24} />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern frameworks and tools."
    },
    {
      icon: <MonitorIcon size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive user interfaces with a focus on user experience and accessibility."
    },
    {
      icon: <WandIcon size={24} />,
      title: "Creative Problem Solving",
      description: "Finding elegant solutions to complex problems through logical thinking and creativity."
    },
    {
      icon: <SmileIcon size={24} />,
      title: "User-Centered Approach",
      description: "Developing with the end-user in mind, ensuring products that meet real needs."
    }
  ];

  return (
    <section id="about" className="bg-secondary py-20 md:py-28">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <span className="px-4 py-1 text-xs font-medium bg-primary/10 rounded-full">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                Passionate about creating impactful digital experiences
              </h2>
              <p className="text-muted-foreground text-lg">
                I'm a developer with a passion for crafting beautiful, functional websites and applications. 
                With a background in design and programming, I bring a holistic approach to every project.
              </p>
              <p className="text-muted-foreground">
                My journey in web development started with a curiosity about how things work on the internet, 
                which led me to pursue formal education and extensive self-learning in modern web technologies.
              </p>
              <p className="text-muted-foreground">
                I believe in continuous learning and staying up-to-date with the latest trends and best practices 
                in the ever-evolving world of web development and design.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-full absolute -top-3 -right-3 border-2 border-primary rounded-xl"></div>
              <div className="relative bg-background rounded-xl overflow-hidden aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">My Skills & Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
