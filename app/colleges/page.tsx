import React from 'react';
import CollegeCard from '@/components/ui/CollegeCard';
import SubHero from '@/components/ui/SubHero';

export default function CollegesPage() {
  const courses = [
    {
      collegeName: 'Homebrew',
      imageSrc: '/python.png', // Ensure this path is correct
      pageId: '470a06d492e04389bd3fa351de9189dc'
    },
    {
      collegeName: 'Harvard',
      imageSrc: '/malan.jpg', // Ensure this path is correct
      pageId: '7caa545985e946268b172ec280d54ffd'
    }
  ];

  return (
    <section>
      <SubHero title="Colleges 🏛️" description="Learn Today. Build Tomorrow." />

      <div className="pt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <CollegeCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}
