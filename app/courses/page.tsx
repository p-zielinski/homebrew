import React from 'react';

// Define CourseCard component
function CourseCard({ title, college, rating, description, duration, studentCount, imageSrc }) {
  return (
    <div className="course-card border-2 rounded-xl border-[#FF00FF]">
      <img src={imageSrc} alt="Description" class="rounded-t-xl" />
      <div class="p-4">
        <div class="flex items-center justify-between">
        <h3 class="font-extrabold text-white sm:text-3xl">{title}</h3>
          <p>⭐️{rating}</p>
        </div>
        <p class="text-white sm:text-lg mt-6" >{description}</p>
        <div class="mt-4">
            <p>⏳ {duration}</p>
        </div>
        <div class="flex items-center justify-between mt-2 ">
            <p>🏛️ {college}</p>
            <p>👨‍🎓 {studentCount}</p>
        </div>
      </div>
    </div>
  );
}

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
