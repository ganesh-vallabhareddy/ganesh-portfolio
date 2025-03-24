
import React, { useState } from 'react';
import { Code, FileText, Image, MessageSquare } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "TextCraft AI",
      description: "A tool for simplifying writing tasks using OpenAI's GPT-3.5 API, making content creation more accessible and efficient.",
      icon: <FileText className="w-6 h-6" />,
      tags: ["OpenAI API", "Natural Language Processing", "Content Generation"],
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "The Wall",
      description: "A social media mobile application built with Flutter and Firebase, allowing users to share thoughts, images, and connect with others.",
      icon: <Image className="w-6 h-6" />,
      tags: ["Flutter", "Firebase", "Mobile App", "Social Media"],
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "AR Shopping App",
      description: "An augmented reality shopping application that enables users to virtually try products before purchasing.",
      icon: <Image className="w-6 h-6" />,
      tags: ["AR", "Mobile App", "E-commerce", "User Experience"],
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Voice Bot",
      description: "A conversational AI voice bot leveraging GPT-3 API for natural language understanding and response generation.",
      icon: <MessageSquare className="w-6 h-6" />,
      tags: ["AI", "Voice Recognition", "GPT-3", "Natural Language Processing"],
      color: "bg-amber-50",
      iconColor: "text-amber-600"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mb-12">
          Innovative solutions I've developed
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="glass-card p-4 h-full">
              <div className="space-y-1">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeProject === index 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-secondary'
                    }`}
                    onClick={() => setActiveProject(index)}
                  >
                    <div className="font-medium">{project.title}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="glass-card p-8 h-full">
              <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${projects[activeProject].color}`}>
                <div className={projects[activeProject].iconColor}>
                  {projects[activeProject].icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{projects[activeProject].title}</h3>
              <p className="text-muted-foreground mb-6">{projects[activeProject].description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[activeProject].tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary text-foreground/70 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-border">
                <button className="text-primary hover:text-primary/80 font-medium flex items-center gap-2">
                  <Code size={18} />
                  <span>View Project Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
