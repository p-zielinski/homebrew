import React from 'react';
// import Link from 'next/link';


interface CardProps {
    title: string;
  }
  

  const Card: React.FC<CardProps> = ({ title }) => {
    return (
      <div className="mx-auto max-w-6xl px-2 pt-20 lg:px-8 lg:py-8">
        <div className="bg-vc-border-gradient rounded-xl p-px">       
          <div className="rounded-xl bg-black p-3.5 lg:p-6">
            <h1 className="text-6xl font-semibold mb-12">{title}</h1>
          </div>
        </div>
      </div>
    );
  }

export default Card;
