import React from 'react';
import Card from '@/components/ui/Card';
import CardWatch from '@/components/ui/CardWatch';
import CardAI from '@/components/ui/CardAI';

import SubHero from '@/components/ui/SubHero';

export default function PythonPage() {
  return (
    <section className=" text-white">
        <p className="text-4xl pt-8 text-center font-extrabold sm:text-6xl">
            Getting Started with Python
        </p>

      <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">

        <CardWatch
            sections={[
                {
                subtitle: "Watch🍿",
                content: (
                    <>
                        <p>Get the basics</p>
                        <div className="mt-4 w-full overflow-hidden relative" style={{ paddingTop: "56.25%" }}>
                            <iframe 
                                src="https://www.youtube.com/embed/vqj_nbl4jSk"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            >
                            </iframe>
                        </div>
                    </>
                )
                },
                {
                    subtitle: "Read 🤓",
                    content: (
                        <>
                            <p>Get some more</p>
    
                            <p className="mt-4">
                            Welcome to your first Python lesson! Python is a versatile and widely-used programming language known for its readability and efficiency. In this lesson, we'll cover some of the basics to get you started.
                        </p>
    
                        <h3 className="text-xl font-bold mt-6">What is Python?</h3>
                        <p className="mt-4">
                            Python is a high-level, interpreted language that offers an approachable syntax and a powerful set of libraries. It's used in web development, data analysis, artificial intelligence, scientific computing, and more.
                        </p>
    
                        <h3 className="text-xl font-bold mt-6">Basic Syntax</h3>
                        <p className="mt-4">
                            Python syntax is clean and easy to understand. A basic Python program can be as simple as a line printing text to the console. For example:
                        </p>
    
                        <pre className="bg-[#202020] text-white p-4">
                            <code>
                                print("Hello, Python!")
                            </code>
                        </pre>
    
                        </>
                    )
                    },
            ]}
        />

        <CardAI
            sections={[
                {
                subtitle: "Crash it🔥",
                content: (
                    <>
                        <p>Show us what you got</p>
                    </>
                )
                },
            ]}
            />




        
      </div>
    </section>
  );
}



// export default function PythonPage() {
//     return (
//         <section className=" text-white">
//             <div className="max-w-5xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
//                 <p className="text-4xl pt-8 text-center font-extrabold sm:text-6xl">
//                     Getting Started with Python
//                 </p>

//                 {/* Course Introduction */}
//                 <div className="mt-24">
//                     <h2 className="text-3xl font-bold">Watch🍿</h2>
//                     <p className="mt-4">
//                         Get the basics
//                     </p>
//                     <div className="mt-4 w-full overflow-hidden relative" style={{ paddingTop: "56.25%" }}>
//                         <iframe 
//                             src="https://www.youtube.com/embed/vqj_nbl4jSk"
//                             title="YouTube video player"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                             className="absolute top-0 left-0 w-full h-full"
//                         >
//                         </iframe>
//                     </div>
//                     <div className=" flex justify-end gap-2">
//                         <button className="mt-4 text-white px-4 py-2 rounded-lg">Improve☝️</button>
//                         <button className="mt-4 text-white px-4 py-2 rounded-lg">Script📜</button>
//                     </div>
//                 </div>

//                 <div className="mt-8">
//                     <h2 className="text-3xl font-bold">Read🤓</h2>
//                     <p className="mt-4">
//                         Welcome to your first Python lesson! Python is a versatile and widely-used programming language known for its readability and efficiency. In this lesson, we'll cover some of the basics to get you started.
//                     </p>

//                     <h3 className="text-xl font-bold mt-6">What is Python?</h3>
//                     <p className="mt-4">
//                         Python is a high-level, interpreted language that offers an approachable syntax and a powerful set of libraries. It's used in web development, data analysis, artificial intelligence, scientific computing, and more.
//                     </p>

//                     <h3 className="text-xl font-bold mt-6">Basic Syntax</h3>
//                     <p className="mt-4">
//                         Python syntax is clean and easy to understand. A basic Python program can be as simple as a line printing text to the console. For example:
//                     </p>
//                     <pre className="bg-[#202020] text-white p-4">
//                         <code>
//                             print("Hello, Python!")
//                         </code>
//                     </pre>

//                     <h3 className="text-xl font-bold mt-6">Variables and Data Types</h3>
//                     <p className="mt-4">
//                         In Python, you can store information in variables. Python is dynamically-typed, meaning you don't need to declare the type of a variable when you create one. Here's a simple example:
//                     </p>
//                     <pre className="bg-[#202020] text-white p-4">
//                         <code>
//                             message = "Python is fun!"<br />
//                             number = 10<br />
//                             print(message)<br />
//                             print(number)
//                         </code>
//                     </pre>

//                     <h3 className="text-xl font-bold mt-6">Next Steps</h3>
//                     <p className="mt-4">
//                         This introduction has barely scratched the surface of what Python can do. As you progress through the course, you'll learn about control structures, data structures, functions, and more advanced topics that will unlock the full potential of Python.
//                     </p>
//                     <div className=" flex justify-end gap-2">
//                         <button className="mt-4 text-white px-4 py-2 rounded-lg">Improve☝️</button>
//                         <button className="mt-4 text-white px-4 py-2 rounded-lg">Script📜</button>
//                     </div>
//                 </div>


//                 {/* Placeholder for Future AI Assistant */}
//                 <div className="mt-8">
//                     <h2 className="text-3xl font-bold">Crash it🔥</h2>
//                     <p className="mt-4">
//                         Show us what you got
//                     </p>
//                 </div>


                

//                 <div className=" flex justify-end gap-2">
//                         <button className="mt-4 text-white px-4 py-2 rounded-lg">Improve☝️</button>
//                         <button className="mt-4 text-white px-4 py-2 rounded-lg">Script📜</button>
//                 </div>
//             </div>
//         </section>
//     );
// }
