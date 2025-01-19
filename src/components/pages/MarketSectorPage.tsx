import React from 'react';

const MarketSectorPage = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center px-8">
      <div className="w-full max-w-7xl space-y-8">
        <h2 className="text-3xl font-bold text-brand-dark">Web3 Market Sectors</h2>
        
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/3b18767d-3528-4aaf-af4d-ffcf958ace04.png" 
            alt="Web3 Market Sectors Overview" 
            className="w-full max-w-5xl object-contain"
          />
        </div>
        
        <div className="text-left space-y-4 max-w-3xl mx-auto">
          <p className="text-lg text-mono-600">
            The Web3 ecosystem spans multiple sectors, from direct monetization platforms to creator tools and infrastructure. This landscape represents the key players across different verticals including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-mono-600 pl-4">
            <li>Community Tokens and NFT Marketplaces</li>
            <li>Metaverse and Gaming Platforms</li>
            <li>Music and Content Distribution</li>
            <li>Creator Tools and Management Solutions</li>
            <li>Payment and Financial Infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MarketSectorPage;