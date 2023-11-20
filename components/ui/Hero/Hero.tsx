import React from 'react';

interface HeroProps {
    title: string;
    description: string;
  }
  
const Hero: React.FC<HeroProps> = ({ title, description }) => {
    return (
        <div className="max-w-6xl mx-auto sm:py-24 sm:px-6 lg:px-8">
          <p className="text-5xl pt-8  font-extrabold text-white sm:text-center sm:text-8xl">
            {title}
          </p>
          <p className="text-white pt-6 sm:text-center sm:text-5xl p">
            {description}
          </p>
        </div>
  );
}

export default Hero;
