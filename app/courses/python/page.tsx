import React from 'react';

export default function PythonPage() {
    return (
        <section className="bg-black text-white">
            <div className="max-w-5xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
                <p className="text-4xl pt-8 text-center font-extrabold sm:text-6xl">
                    Welcome to Python 101 🐍
                </p>

                {/* Course Introduction */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold">Info 💁‍♂️</h2>
                    <p className="mt-4">
                        Learn the basics of Python, one of the most popular and versatile programming languages today.
                    </p>
                </div>

                {/* Skills */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold">Skills 💪</h2>
                    <ul className="list-disc list-inside mt-4">
                        <li >Python</li>
                            <ul className="list-disc list-inside pl-6">
                                <li>Programming</li>
                                <li>Variables and Data Types</li>
                                <li>Control Structures and Loops</li>
                            </ul>
                        {/* <li>Variables and Data Types</li> */}
                    </ul>
                </div>

                {/* Course Modules */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold">Chapters 📕</h2>
                    <ul className="list-disc list-inside mt-4">
                        <li>Getting Started with Python</li>
                        <li>Variables and Data Types</li>
                        <li>Control Structures and Loops</li>
                        <li>Functions and Modules</li>
                        <li>Working with Files</li>
                        <li>Advanced Topics</li>
                    </ul>
                </div>

                {/* Placeholder for Future AI Assistant */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold">College🏛️</h2>
                    <p className="mt-4">
                        Homebrew
                    </p>
                </div>




                



            </div>
        </section>
    );
}
