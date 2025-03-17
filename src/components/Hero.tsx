
import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      // Subtle parallax effect
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    const heroElement = heroRef.current;
    
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-b from-secondary to-background overflow-hidden"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-[800px] h-[800px] rounded-full bg-primary/30 absolute animate-spin-slow"></div>
        <div className="w-[600px] h-[600px] rounded-full bg-primary/20 absolute animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="container-inner">
          <div className="flex flex-col items-center text-center space-y-6 animate-scale-in [animation-delay:300ms]">
            <span className="inline-block py-1 px-4 bg-primary/10 rounded-full text-sm font-medium">
              Portfolio
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
              Creating <span className="text-primary">beautiful</span> digital experiences
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-4 text-balance">
              A showcase of my projects and creative work in web development, design, and interaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#projects" 
                className="group px-7 py-3 bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2"
              >
                View Projects
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              
              <a 
                href="#about" 
                className="px-7 py-3 border border-primary/20 rounded-full transition-all duration-300 hover:bg-primary/5"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#projects" className="text-primary/60 hover:text-primary transition-colors">
          <ArrowDownIcon size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
