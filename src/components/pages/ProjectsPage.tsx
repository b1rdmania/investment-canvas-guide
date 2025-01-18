import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsPage = () => {
  const projects = [
    {
      title: "AI Infrastructure",
      description: "Building next-generation computing infrastructure for AI model training and inference at scale.",
      sector: "Technology",
      stage: "Series A"
    },
    {
      title: "Sustainable Manufacturing",
      description: "Revolutionary manufacturing processes that reduce carbon footprint while maintaining high efficiency.",
      sector: "Industrial",
      stage: "Growth"
    },
    {
      title: "Healthcare Analytics",
      description: "Advanced analytics platform leveraging AI for predictive healthcare outcomes.",
      sector: "Healthcare",
      stage: "Series B"
    },
    {
      title: "Clean Energy Storage",
      description: "Innovative energy storage solutions for renewable energy integration.",
      sector: "Energy",
      stage: "Early Stage"
    }
  ];

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="max-w-4xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Current Investment Opportunities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mono-600 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-mono-500">
                  <span>{project.sector}</span>
                  <span>{project.stage}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;