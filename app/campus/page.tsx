import React from 'react';

export default function CampusPage() {
  const uniInfo = {
    students: 3,
    colleges: 1,
    courses: 2,
  };

  return (
    <section className="bg-black">
      <div className="max-w-4xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <p className="text-4xl pt-8 font-extrabold text-white sm:text-center sm:text-6xl">
            Welcome to our Campus🍺
          </p>
          <p className="text-white pt-6 sm:text-center sm:text-3xl p">
            All important info will be posed here
          </p>
      </div>


      <p className="text-4xl pt-8 font-extrabold text-white sm:text-center sm:text-3xl">
            How we doing so far?
      </p>
      <div className="max-w-3xl mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 text-center m-auto">
          <div className="p-4 border-2 border-white rounded-lg">
            <p className="text-5xl font-bold text-white">{uniInfo.students}</p>
            <p className="text-white text-lg">Students</p>
          </div>
          <div className="p-4 border-2 border-white rounded-lg">
            <p className="text-5xl font-bold text-white">{uniInfo.colleges}</p>
            <p className="text-white text-lg">Colleges</p>
          </div>
          <div className="p-4 border-2 border-white rounded-lg">
            <p className="text-5xl font-bold text-white">{uniInfo.courses}</p>
            <p className="text-white text-lg">Courses</p>
          </div>
          
        </div>


    </section>
  );
}
