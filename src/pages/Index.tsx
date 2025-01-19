import React, { useState } from 'react';
import PresentationLayout from '../components/PresentationLayout';
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

const Pages = [
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
];

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    if (currentPage < Pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <PresentationLayout
      currentPage={currentPage}
      totalPages={Pages.length}
      onNextPage={nextPage}
      onPrevPage={prevPage}
    >
      {Pages[currentPage - 1]}
    </PresentationLayout>
  );
};

export default Index;