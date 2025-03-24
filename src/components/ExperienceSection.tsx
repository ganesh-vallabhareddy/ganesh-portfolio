
import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "ZeroCodeHR",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQHR4rQ369zmFw/company-logo_400_400/company-logo_400_400/0/1630615014979/zerocodehr_logo?e=1748476800&v=beta&t=ZOtDkUd_th5c8Rawyfl65T0jw3GdcFlxDXozyJ1OucQ",
      period: "June 2024 - November 2024",
      description: "Currently working as a Software Engineer Intern at ZeroCodeHR, focusing on developing and improving HR software solutions."
    },
    {
      title: "Software Developer Intern",
      company: "Meridian Technology Solutions Inc.",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFISLAnx5OX5g/company-logo_400_400/company-logo_400_400/0/1630616678512?e=1748476800&v=beta&t=ckAd43LxyQBltntlgN38JQ1aEAGED1Ry2dOhHe4-tCI",
      period: "March 2024 - May 2024",
      description: "Worked as a Software Developer Intern at Meridian Technology Solutions Inc., contributing to development projects and gaining practical experience in software engineering."
    }
  ];

  const Education = [
    {
      degree: "Bachelor of Technology (BTech)",
      field: "Computer Science Engineering (Artificial Intelligence & Machine Learning)",
      institution: "Institute of Aeronautical Engineering",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHy9m1CaSIb5Q/company-logo_400_400/company-logo_400_400/0/1702622413342/institute_of_aeronautical_engineering_logo?e=1748476800&v=beta&t=fOO0D2KbhITx_mX1bF2m6ivGB88KzJrmAsXK1Tda3lc",
      period: "2020 - 2024",
      achievement: "Achieved a CGPA of 8.11"
    },
    {
      degree: "Junior College",
      field: "Pre-University Education",
      institution: "Narayana Junior College",
      logo: "",
      period: "2018 - 2020",
      achievement: "Completed with a score of 95.7%"
    },
    {
      degree: "High School",
      field: "Secondary Education",
      institution: "TVR Model High School",
      logo: "",
      period: "Until 2018",
      achievement: "Achieved a CGPA of 9.8"
    }
  ];

  return (
    <div className="py-20 bg-secondary/50">
      <div className="container-custom">
        <section id="experience" className="mb-20">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle mb-10">
            My professional journey and the companies I've worked with
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start transition-all duration-300 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/150?text=Company";
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-1 text-sm font-medium text-muted-foreground">
                    <Calendar size={16} className="inline" />
                    <span>{exp.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                  <p className="text-primary/80 font-medium mb-3">{exp.company}</p>
                  
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section id="education" className="mt-20">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle mb-10">
            My academic background and qualifications
          </p>
          
          <div className="space-y-8">
            {Education.map((edu, index) => (
              <div 
                key={index} 
                className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start transition-all duration-300 hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center p-2">
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={edu.institution} 
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://via.placeholder.com/150?text=Education";
                        }}
                      />
                    ) : (
                      <Briefcase size={28} className="text-primary/60" />
                    )}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-1 text-sm font-medium text-muted-foreground">
                    <Calendar size={16} className="inline" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
                  <p className="text-primary/80 font-medium">{edu.field}</p>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  
                  <div className="inline-block py-1 px-3 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {edu.achievement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperienceSection;
