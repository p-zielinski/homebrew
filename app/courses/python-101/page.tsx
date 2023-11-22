import React from 'react';
import Card from '@/components/ui/Card'
import SubHero from '@/components/ui/SubHero'

export default function PythonPage() {
    return (
        <section>

            <SubHero
                title="Homebrew College"
            />
            
            <Card 
            title="Python 101 🐍"
            sections={[
                {
                subtitle: "Info 💁‍♂️",
                content: "Learn the basics of Python."
                },
                {
                    subtitle: "Skills 💪",
                    content: (
                        <>
                          Python
                          <ul>
                            <li>Programming</li>
                            <li>Variables and Data Types</li>
                            <li>Control Structures and Loops</li>
                          </ul>
                        </>
                      )
                },
                {
                    subtitle: "Chapters 📕",
                    content: (
                        <>
                          <ol className="list-decimal list-inside ">
                            <li>Getting Started with Python</li>
                            <li>Variables and Data Types</li>
                            <li>Control Structures and Loops</li>
                            <li>Functions and Modules</li>
                            <li>Working with Files</li>
                            <li>Advanced Topics</li>
                          </ol>
                        </>
                      )
                },
                {
                    subtitle: "Author 👽",
                    content: "Matt"
                },
            ]}
            />
        </section>
    );
}
