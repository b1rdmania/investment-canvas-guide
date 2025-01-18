import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsPage = () => {
  const projects = [
    {
      title: "AI LLM Models",
      description: "Developing cutting-edge large language models with advanced reasoning capabilities and specialized domain expertise for enterprise applications.",
      sector: "Artificial Intelligence",
      stage: "Series A"
    },
    {
      title: "Film Royalties Project",
      description: "Innovative platform for investing in film and entertainment royalties, providing steady returns through digital content monetization.",
      sector: "Entertainment",
      stage: "Growth"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sector: "Technology",
      stage: "Early Stage"
    },
    {
      title: "Biotech Innovations",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      sector: "Healthcare",
      stage: "Seed"
    }
  ];

  return (
    <div className="flex flex-col h-full w-full justify-center items-center px-8">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-8">Current Investment Opportunities</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mono-600 mb-4 text-left">{project.description}</p>
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