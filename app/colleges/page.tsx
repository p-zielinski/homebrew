import React from 'react';
import SubHero from '@/components/ui/SubHero' 
import NotionCard from '@/components/ui/CollegeCard'



export default function CollegesPage() {
  const courses = [
      {
        collegeName: 'Homebrew College',
        rating: '5.00',
        imageSrc: '/python.png', // Ensure this path is correct
        studentCount: '124'
      },
      {
        collegeName: 'Harvard College',
        rating: '5.00',
        imageSrc: '/malan.jpg', // Ensure this path is correct
        studentCount: '124'
      },
  ];

  return (
    <section>
      <SubHero
        title="Colleges 🏛️"
        description="Learn Today. Build Tomorrow."
      />


      <div className="pt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
              <NotionCard key={index} {...course} />
          ))}
      </div>





    </section>
  );
}
