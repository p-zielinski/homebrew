import React from 'react';
// import Link from 'next/link';



interface ContentSection {
    subtitle: string;
    content: string;
  }
  
  interface CardProps {
    title: string;
    sections?: ContentSection[]; // Make sections optional
  }
  
  

  const Card: React.FC<CardProps> = ({ title, sections = [] }) => {
    return (
      <div className="mx-auto max-w-6xl px-2 pt-20 lg:px-8 lg:py-8">
        <div className="bg-vc-border-gradient rounded-xl p-px">       
          <div className="rounded-xl bg-black p-3.5 lg:p-6">
            <h1 className="text-6xl font-semibold mb-12">{title}</h1>
            {sections.map((section, index) => (
              <div key={index} className="mt-8">
                <h3 className="text-4xl font-semibold">{section.subtitle}</h3>
                <p className="mt-2 text-xl">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  


export default Card;
