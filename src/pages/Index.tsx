import React, { useState } from 'react';
import PresentationLayout from '../components/PresentationLayout';
import LogoPage from '../components/pages/LogoPage';
import WhyNowPage from '../components/pages/WhyNowPage';
import UnfairAdvantagePage from '../components/pages/UnfairAdvantagePage';
import DealCapturePage from '../components/pages/DealCapturePage';
import TechnicalAccessPage from '../components/pages/TechnicalAccessPage';
import InvestmentFocusPage from '../components/pages/InvestmentFocusPage';
import TeamPage from '../components/pages/TeamPage';
import AdvisoryTeamPage from '../components/pages/AdvisoryTeamPage';
import FundStructurePage from '../components/pages/FundStructurePage';
import NextStepsPage from '../components/pages/NextStepsPage';

const Pages = [
  <LogoPage key="1" />,
  <WhyNowPage key="2" />,
  <UnfairAdvantagePage key="3" />,
  <DealCapturePage key="4" />,
  <TechnicalAccessPage key="5" />,
  <InvestmentFocusPage key="6" />,
  <TeamPage key="7" />,
  <AdvisoryTeamPage key="8" />,
  <FundStructurePage key="9" />,
  <NextStepsPage key="10" />
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