import React from 'react';
import Link from 'next/link';
import { notionsIds } from '@/app/fakeDb/notionsIds';

interface CollegeCardProps {
  collegeName: string;
  imageSrc: string;
  pageId: string;
}

// Define CourseCard component
const CollegeCard: React.FC<CollegeCardProps> = ({
  collegeName,
  imageSrc,
  pageId
}) => {
  const getPageSlug = (pageId: string) =>
    notionsIds.find((notionRecord) => notionRecord.pageId === pageId)?.slug;

  return (
    <Link
      href={getPageSlug(pageId) ? `/${getPageSlug(pageId)}` : `/colleges`}
      passHref
    >
      <div className="rounded-xl bg-black">
        <img
          src={imageSrc}
          alt="Description"
          className="h-96 w-full object-cover rounded-t-xl"
        />
        <div className="p-2">
          <div className="p-6">
            <h3 className="sm:text-center sm:text-5xl p">{collegeName}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollegeCard;
