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
    <div className="flex flex-col h-full w-full p-6 overflow-auto">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Current Investment Opportunities
        </h2>
        
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-brand-coral"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg md:text-xl font-semibold">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mono-600 mb-3 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex justify-between text-xs md:text-sm text-mono-500 pt-2 border-t border-mono-200">
                  <span className="bg-mono-100 px-2 py-1 rounded">
                    {project.sector}
                  </span>
                  <span className="bg-brand-coral-light bg-opacity-10 text-brand-coral px-2 py-1 rounded">
                    {project.stage}
                  </span>
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