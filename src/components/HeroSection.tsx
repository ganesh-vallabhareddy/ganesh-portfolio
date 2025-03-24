
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D5603AQFYyBoJqpp-FA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1689597708772?e=1748476800&v=beta&t=UnXqKxa36ubfLGjhaUHK54t2NSMl9teWUpo18FoSiUM";
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6 animate-fade-in">
          <div className="inline-block py-1 px-3 bg-secondary text-muted-foreground text-sm font-medium rounded-full">
            Software Engineer
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
            Hello, I'm <br />
            <span className="text-primary">Ganesh Vallabhareddy</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg">
            A passionate software engineer specializing in machine learning, 
            mobile development, and generative AI. Creating innovative solutions 
            to real-world problems.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-secondary text-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-delay">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={profileImageUrl} 
                alt="Ganesh Vallabhareddy" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400?text=Ganesh+Vallabhareddy";
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="font-mono text-sm">ML/AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-pulse-slow"
      >
        <span className="text-sm">Scroll Down</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection;
