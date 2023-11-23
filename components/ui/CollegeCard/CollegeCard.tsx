import React from 'react';
import Link from 'next/link';
import { notionsIds } from '@/app/fakeDb/notionsIds';

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
  const getPageSlug = (pageId: string) =>
    notionsIds.find((notionRecord) => notionRecord.pageId === pageId)?.slug;

  return (
    <Link
      href={getPageSlug(pageId) ? `/${getPageSlug(pageId)}` : `/colleges`}
      passHref
    >
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
