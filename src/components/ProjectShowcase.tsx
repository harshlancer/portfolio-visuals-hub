
import React, { useRef, useEffect } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';

// Sample project data
const projects: ProjectProps[] = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a sleek UI, shopping cart functionality, and secure payment processing.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks with drag-and-drop functionality and real-time updates.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1974&auto=format&fit=crop",
    tags: ["React", "Firebase", "Tailwind"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather app that displays current and forecasted weather conditions with beautiful visualizations.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop",
    tags: ["TypeScript", "API", "CSS"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website with smooth animations and responsive design to showcase projects.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "Three.js", "GSAP"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true
  },
  {
    title: "Social Media Dashboard",
    description: "An analytics dashboard for social media platforms with data visualization and insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Vue", "D3.js", "Node.js"],
    liveUrl: "#",
    repoUrl: "#"
  }
];

const ProjectShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => {
      projectElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-background py-20 md:py-28">
      <div className="section-container">
        <div className="container-inner text-center space-y-4 mb-16">
          <span className="px-4 py-1 text-xs font-medium bg-primary/10 rounded-full">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating
            intuitive and engaging digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card opacity-0 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
