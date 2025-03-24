
import React from 'react';
import { Code, Database, Smartphone, Server, Layout } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Dart", level: 75 },
        { name: "Java", level: 70 },
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 75 },
        { name: "Scikit-Learn", level: 80 },
        { name: "OpenAI APIs", level: 90 },
        { name: "Natural Language Processing", level: 80 },
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        { name: "Flutter", level: 85 },
        { name: "Firebase", level: 80 },
        { name: "Mobile UI/UX", level: 75 },
        { name: "State Management", level: 75 },
      ]
    },
    {
      title: "Web Development",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React", level: 85 },
        { name: "Angular", level: 70 },
        { name: "HTML/CSS", level: 90 },
        { name: "RESTful APIs", level: 85 },
      ]
    },
    {
      title: "Cloud & Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "AWS Services", level: 80 },
        { name: "SageMaker", level: 75 },
        { name: "Lambda", level: 75 },
        { name: "API Gateway", level: 80 },
        { name: "SQL Databases", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle mb-12">
          Technologies and tools I specialize in
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-container">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress transition-all duration-1000" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Notable Achievements</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AVAZYA Project Expo Winner", date: "April 2023" },
              { title: "Code Infinity Hackathon Winner", date: "March 2023" },
              { title: "VISAI Project Expo Runner", date: "February 2023" }
            ].map((achievement, index) => (
              <div key={index} className="glass-card p-6 text-left">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
