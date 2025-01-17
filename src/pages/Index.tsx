import React, { useState } from 'react';
import PresentationLayout from '../components/PresentationLayout';
import DesignGuidelines from '../components/DesignGuidelines';
import LogoPage from '../components/pages/LogoPage';
import ExecutiveSummaryPage from '../components/pages/ExecutiveSummaryPage';
import WhyNowPage from '../components/pages/WhyNowPage';
import UnfairAdvantagePage from '../components/pages/UnfairAdvantagePage';
import DealCapturePage from '../components/pages/DealCapturePage';
import TechnicalAccessPage from '../components/pages/TechnicalAccessPage';
import InvestmentFocusPage from '../components/pages/InvestmentFocusPage';
import TeamPage from '../components/pages/TeamPage';
import AdvisoryTeamPage from '../components/pages/AdvisoryTeamPage';
import FundStructurePage from '../components/pages/FundStructurePage';
import PartnersPage from '../components/pages/PartnersPage';

const Pages = [
  <LogoPage key="1" />,
  <ExecutiveSummaryPage key="2" />,
  <WhyNowPage key="3" />,
  <UnfairAdvantagePage key="4" />,
  <DealCapturePage key="5" />,
  <TechnicalAccessPage key="6" />,
  <InvestmentFocusPage key="7" />,
  <TeamPage key="8" />,
  <AdvisoryTeamPage key="9" />,
  <FundStructurePage key="10" />,
  <PartnersPage key="11" />
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
      <DesignGuidelines currentPage={currentPage} />
    </PresentationLayout>
  );
};

export default Index;