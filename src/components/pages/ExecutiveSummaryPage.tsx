import React from 'react';

const ExecutiveSummaryPage = () => (
  <div className="space-y-12 flex flex-col h-full">
    <div className="flex items-center justify-between">
      <img 
        src="/lovable-uploads/a8768ee1-3b39-4eaf-87b8-e6c89913763a.png" 
        alt="Acidic Labs Logo" 
        className="w-32"
      />
      <h2 className="text-3xl font-bold text-brand-dark">Executive Summary</h2>
    </div>
    <div className="flex-1 flex flex-col justify-center space-y-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-brand-dark">Vision</h3>
          <p className="text-brand-dark font-light">
            To be the leading incubator at the intersection of Web3, AI, and creative industries
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-brand-dark">Mission</h3>
          <p className="text-brand-dark font-light">
            Empowering creators and innovators with next-generation tools and infrastructure
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ExecutiveSummaryPage;