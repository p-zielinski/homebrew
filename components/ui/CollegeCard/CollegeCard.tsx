import React from 'react';
import Link from 'next/link';

interface CollegeCardProps {
  collegeName: string;
  rating: string;
  imageSrc: string;
  studentCount: string;
  pageId: string;
}

// Define CourseCard component
const CollegeCard: React.FC<CollegeCardProps> = ({
  collegeName,
  rating,
  imageSrc,
  studentCount,
  pageId
}) => {
  return (
    <Link href={`/${pageId}`} passHref>
      <div className="course-card border-2 rounded-xl border-[#707070] bg-black">
        <img src={imageSrc} alt="Description" className="rounded-t-xl" />
        <div className="p-2">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-white sm:text-xl">
              {collegeName}
            </h3>
            <p>⭐️{rating}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;
