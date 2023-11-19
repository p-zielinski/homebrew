import React from 'react';
import CourseCard from '@/components/ui/CourseCard' // Adjust the path as necessary


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
        <section className="bg-black">
            <div className="max-w-4xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
                <p className="text-4xl pt-8 font-extrabold text-white sm:text-center sm:text-6xl">
                    Courses🧠
                </p>
                <p className="text-white pt-6 sm:text-center sm:text-3xl p">
                    Learn something cool today
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
            
        </section>
    );
}
