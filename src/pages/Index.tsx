import React from 'react';
import LogoPage from '../components/pages/LogoPage';
import WhyNowPage from '../components/pages/WhyNowPage';
import UnfairAdvantagePage from '../components/pages/UnfairAdvantagePage';
import DealCapturePage from '../components/pages/DealCapturePage';
import TechnicalAccessPage from '../components/pages/TechnicalAccessPage';
import ProjectsPage from '../components/pages/ProjectsPage';
import InvestmentFocusPage from '../components/pages/InvestmentFocusPage';
import TeamPage from '../components/pages/TeamPage';
import AdvisoryTeamPage from '../components/pages/AdvisoryTeamPage';
import FundStructurePage from '../components/pages/FundStructurePage';
import NextStepsPage from '../components/pages/NextStepsPage';
import MarketSectorPage from '../components/pages/MarketSectorPage';

const Index = () => {
  return (
    <div className="min-h-screen bg-mono-100">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-24">
        <section className="bg-white rounded-lg shadow-lg p-12">
          <LogoPage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <WhyNowPage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <DealCapturePage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <UnfairAdvantagePage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <TechnicalAccessPage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <MarketSectorPage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <ProjectsPage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <InvestmentFocusPage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <TeamPage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <AdvisoryTeamPage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <FundStructurePage />
        </section>
        
        <section className="bg-white rounded-lg shadow-lg p-12">
          <NextStepsPage />
        </section>
      </div>
    </div>
  );
};

export default Index;