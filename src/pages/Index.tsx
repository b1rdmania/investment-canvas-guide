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
        {[
          <LogoPage key="1" />,
          <WhyNowPage key="2" />,
          <DealCapturePage key="3" />,
          <UnfairAdvantagePage key="4" />,
          <TechnicalAccessPage key="5" />,
          <MarketSectorPage key="6" />,
          <ProjectsPage key="7" />,
          <InvestmentFocusPage key="8" />,
          <TeamPage key="9" />,
          <AdvisoryTeamPage key="10" />,
          <FundStructurePage key="11" />,
          <NextStepsPage key="12" />
        ].map((page, index) => (
          <section 
            key={index} 
            className="bg-white rounded-lg shadow-lg p-12 min-h-[calc(100vh-4rem)] flex flex-col justify-center print:min-h-screen print:break-after-page print:break-inside-avoid print:shadow-none print:rounded-none"
          >
            {page}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Index;