import React from 'react';
import CourseCard from '@/components/ui/CourseCard'
import SubHero from '@/components/ui/SubHero';


// Define CoursesPage component
export default function CoursesPage() {
    const courses = [
        {
          title: 'Python 101',
          college : 'Homebrew',
          rating: '5.00',
          description: 'Learn the basics of Python programming.',
          duration: '1h',
          studentCount: '4',
          imageSrc: '/python.png', // Ensure this path is correct
        },
        {
            title: 'CS 50',
            college : 'Harvard',
            rating: '5.00',
            description: 'First lecutre of iconic CS 50 Harvard course.',
            duration: '1h',
            studentCount: '4',
            imageSrc: '/malan.jpg', // Ensure this path is correct
          },
    ];

    return (
        <section>
            <SubHero 
                title="Courses🧠" 
                description="Learn something cool today" 
            />

            <div className="pt-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
            
        </section>
    );
}