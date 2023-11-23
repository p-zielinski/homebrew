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
  imageSrc,
  pageId
}) => {
  return (
    <Link href={`/${pageId}`} passHref>
      <div className="rounded-xl bg-black">
        <img src={imageSrc} alt="Description" className="h-96 w-full object-cover rounded-t-xl" />
        <div className="p-6">
          <h3 className="sm:text-center sm:text-5xl p">
                {collegeName}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;
