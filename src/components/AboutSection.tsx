
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mb-8">
            Get to know my background and what drives me
          </p>
          
          <div className="space-y-6 text-lg">
            <p>
              I'm a <strong>Software Engineer</strong> with a strong foundation in 
              <strong> AI and Machine Learning</strong>. My academic background in Computer Science Engineering, 
              coupled with practical experience in software development, has equipped me with the skills to 
              tackle complex technical challenges.
            </p>
            
            <p>
              What truly drives me is the opportunity to use technology to solve real-world problems. 
              I'm particularly passionate about developing intelligent applications that leverage the power 
              of machine learning and AI to deliver innovative solutions.
            </p>
            
            <p>
              My journey in the tech world has been marked by continuous learning and adaptation. 
              From working on Flutter mobile applications to developing generative AI solutions, 
              I've cultivated a diverse skill set that allows me to approach problems from multiple angles.
            </p>

            <p>
              I describe myself as curious and adaptable, always eager to learn new technologies and 
              fit into various tech stacks. This mindset has been crucial in my development as a 
              software engineer, especially in the rapidly evolving fields of AI and machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
