import React from 'react';


interface CourseCardProps {
    title: string;
    college: string;
    rating: string;
    description: string;
    duration: string;
    studentCount: string;
    imageSrc: string;
  }
  

// Define CourseCard component
const CourseCard: React.FC<CourseCardProps> = ({ title, college, rating, description, duration, studentCount, imageSrc }) => {
    return (
    <div className="course-card border-2 rounded-xl border-[#FF00FF]">
      <img src={imageSrc} alt="Description" className="rounded-t-xl" />
      <div className="p-4">
        <div className="flex items-center justify-between">
        <h3 className="font-extrabold text-white sm:text-3xl">{title}</h3>
          <p>⭐️{rating}</p>
        </div>
        <p className="text-white sm:text-lg mt-6" >{description}</p>
        <div className="mt-4">
            <p>⏳ {duration}</p>
        </div>
        <div className="flex items-center justify-between mt-2 ">
            <p>🏛️ {college}</p>
            <p>👨‍🎓 {studentCount}</p>
        </div>
      </div>
    </div>
  );
}


export default CourseCard;
