import React from 'react';
import SubHero from '@/components/ui/SubHero' 

export default function CampusPage() {
  const uniInfo = {
    students: 3,
    colleges: 1,
    courses: 2,
  };

  return (
    <section>
      <SubHero
        title="Campus🍺"
        description="How we doing so far?"
      />


      <div className="max-w-3xl mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 text-center m-auto ">
          <div className="p-4 border-2 border-white rounded-lg bg-black">
            <p className="text-5xl font-bold text-white">{uniInfo.students}</p>
            <p className="text-white text-lg">Students</p>
          </div>
          <div className="p-4 border-2 border-white rounded-lg bg-black">
            <p className="text-5xl font-bold text-white">{uniInfo.colleges}</p>
            <p className="text-white text-lg">Colleges</p>
          </div>
          <div className="p-4 border-2 border-white rounded-lg bg-black">
            <p className="text-5xl font-bold text-white">{uniInfo.courses}</p>
            <p className="text-white text-lg">Courses</p>
          </div>
          
        </div>


    </section>
  );
}
