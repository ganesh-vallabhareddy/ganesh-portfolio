
import React from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "Coursera",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGexnfBxeEG-g/company-logo_400_400/company-logo_400_400/0/1630530042036/coursera_logo?e=1748476800&v=beta&t=OQ4lojCXtojtb8troNnmg0FmYNOaWG_HGYV3b2Mfrbw",
      date: "2023"
    },
    {
      title: "Problem Solving Certification",
      issuer: "HackerRank",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_400_400/company-logo_400_400/0/1705561459405/hackerrank_logo?e=1748476800&v=beta&t=VsJfV6fDH9TShaEjUlt4j2nWfy82x2UNxPSD9r33RRA",
      date: "2022"
    },
    {
      title: "SQL Certification",
      issuer: "HackerRank",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_400_400/company-logo_400_400/0/1705561459405/hackerrank_logo?e=1748476800&v=beta&t=VsJfV6fDH9TShaEjUlt4j2nWfy82x2UNxPSD9r33RRA",
      date: "2022"
    },
    {
      title: "Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase & Co.",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGxpntCyRgsuA/company-logo_400_400/company-logo_400_400/0/1718711710850/jpmorganchase_logo?e=1748476800&v=beta&t=do_7RcZEVekfaPEtmoQT8aW-RBdjZi6izf6goPfyVzo",
      date: "2023"
    },
    {
      title: "Machine Learning Certification",
      issuer: "Simplilearn",
      logo: "https://media.licdn.com/dms/image/v2/C510BAQEvNU0EYy6wUw/company-logo_400_400/company-logo_400_400/0/1631319527790?e=1748476800&v=beta&t=Wcgvi5aRngtIczg1C23-Nc63yCaSc0ce04zrCXJocTY",
      date: "2023"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/50">
      <div className="container-custom">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle mb-12">
          Professional certifications and achievements
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center p-1">
                  <img 
                    src={cert.logo} 
                    alt={cert.issuer} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/150?text=Cert";
                    }}
                  />
                </div>
                <Award className="text-primary/60" size={24} />
              </div>
              
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {cert.issuer} • {cert.date}
              </p>
              
              <div className="mt-auto pt-3 border-t border-border">
                <button className="text-primary text-sm hover:text-primary/80 font-medium">
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
