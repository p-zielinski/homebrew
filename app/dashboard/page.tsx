import React from 'react';
import SubHero from '@/components/ui/SubHero' 
import Card from '@/components/ui/Card'


export default function DashboardPage() {
    return (
      <section>
        <SubHero 
        title="Dashboard🕹️" 
        description="Track Progress. Achieve Greatness." 
        />

        <Card 
        title="Skills"
        subtitle="View all students"
        content="View all students"
        />
        
      </section>
    );
  }
  
