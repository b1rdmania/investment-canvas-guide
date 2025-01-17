import React, { useState } from 'react';
import PresentationLayout from '../components/PresentationLayout';
import DesignGuidelines from '../components/DesignGuidelines';

const Pages = [
  // Page 1: Logo Page
  <div key="1" className="flex flex-col items-center justify-center h-full bg-brand-white">
    <img 
      src="/lovable-uploads/a8768ee1-3b39-4eaf-87b8-e6c89913763a.png" 
      alt="Acidic Labs Logo" 
      className="w-4/5 max-w-5xl"
    />
  </div>,

  // Page 2: Executive Summary
  <div key="2" className="space-y-8 flex flex-col items-center justify-center h-full">
    <p className="text-brand-dark max-w-3xl text-center mt-8 font-light">
      Acidic Labs is an incubator fund investing at the convergence of Web3, AI, and creative industries that creates unfair advantage through technology partnerships and advisory expertise.
    </p>
  </div>,

  // Page 3: Why Now
  <div key="3" className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Why Now v1</h2>
    <div className="space-y-4">
      <h3 className="text-2xl text-brand-dark">The $2.25tn creative economy is at breaking point:</h3>
      <ul className="space-y-4 text-brand-dark">
        <li>• Current systems can't handle basic operations</li>
        <li>• AI driving 100x explosion in content creation</li>
        <li>• Even simple tech solutions revolutionary in this market</li>
        <li>• Web2 transformed how content moves, Web3 transforms how value flows.</li>
      </ul>
    </div>
  </div>,

  // Page 4: Our Edge - Deal Capture
  <div key="4" className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Our Edge: Deal Capture</h2>
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark">Global Deal Capture</h3>
      <ul className="space-y-4 text-brand-dark">
        <li>• Strategic event presence</li>
        <li>• Network of technical & ecosystem partners</li>
        <li>• Direct developer community relationships</li>
        <li>• First-mover advantage in emerging markets</li>
      </ul>
    </div>
  </div>,

  // Page 5: Our Edge - Direct Access
  <div key="5" className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Our Edge: Direct Technical Access</h2>
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark">Technical Partnerships</h3>
      <ul className="space-y-4 text-brand-dark">
        <li>• Embedded relationships with major blockchain teams</li>
        <li>• Pre-public visibility of technical projects</li>
        <li>• First look at protocol innovations</li>
        <li>• Shared Deal flow with Web3 & AI led VCs</li>
      </ul>
    </div>
  </div>,

  // Page 6: Investment Focus
  <div key="6" className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Investment Focus</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Key Metrics</h3>
        <ul className="space-y-2 text-brand-dark">
          <li>• 50-80 companies at pre-seed stage</li>
          <li>• $50K-$200K initial checks</li>
          <li>• Investing period - extending to 2 or 3 years</li>
          <li>• $6M follow-on reserve</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Target Returns</h3>
        <ul className="space-y-2 text-brand-dark">
          <li>• 2% delivering 100x = $8M</li>
          <li>• 2% delivering 50x = $4M</li>
          <li>• 6% delivering 10x = $2.4M</li>
          <li>• Base return: 1.48x from first checks</li>
        </ul>
      </div>
    </div>
  </div>,

  // Page 7: Team
  <div key="7" className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Team</h2>
    <div className="grid grid-cols-3 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Andy</h3>
        <ul className="space-y-2 text-brand-dark">
          <li>• Direct L1/L2 experience</li>
          <li>• Chain partnership relationships</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Leo</h3>
        <ul className="space-y-2 text-brand-dark">
          <li>• Fund operations background</li>
          <li>• Deal flow development</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Tim</h3>
        <ul className="space-y-2 text-brand-dark">
          <li>• Regulatory expertise</li>
          <li>• Music industry integration</li>
        </ul>
      </div>
    </div>
  </div>,

  // New Page: Advisory Team
  <div key="advisory-team" className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Advisory Team</h2>
    <div className="grid grid-cols-3 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Advisory Position</h3>
        <ul className="space-y-2 text-brand-dark">
          <li>• Position details to be added</li>
          <li>• Experience highlights</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Advisory Position</h3>
        <ul className="space-y-2 text-brand-dark">
          <li>• Position details to be added</li>
          <li>• Experience highlights</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Advisory Position</h3>
        <ul className="space-y-2 text-brand-dark">
          <li>• Position details to be added</li>
          <li>• Experience highlights</li>
        </ul>
      </div>
    </div>
  </div>,

  // Page 8: Fund Structure
  <div key="8" className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Fund Structure</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Terms</h3>
        <table className="w-full text-brand-dark">
          <tbody>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Size</td>
              <td className="py-2">$10M</td>
            </tr>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Period</td>
              <td className="py-2">2024-2029</td>
            </tr>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Management</td>
              <td className="py-2">2%</td>
            </tr>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Carry</td>
              <td className="py-2">20%</td>
            </tr>
            <tr>
              <td className="py-2">Minimum</td>
              <td className="py-2">$50K</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-brand-dark">Timeline</h3>
        <table className="w-full text-brand-dark">
          <tbody>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Q2 2024</td>
              <td className="py-2">First Close</td>
            </tr>
            <tr className="border-b border-brand-cream">
              <td className="py-2">Q3 2024</td>
              <td className="py-2">Initial Deployment</td>
            </tr>
            <tr>
              <td className="py-2">Q4 2024</td>
              <td className="py-2">Second Close</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>,

  // Page 9: Partners
  <div key="partners" className="space-y-8">
    <h2 className="text-3xl font-bold text-brand-dark">Partners</h2>
    <div className="flex-1 space-y-12">
      <div className="grid grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-brand-dark">Partner Position</h3>
          <ul className="space-y-2 text-brand-dark">
            <li>• Partner details to be added</li>
            <li>• Partnership scope</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-brand-dark">Partner Position</h3>
          <ul className="space-y-2 text-brand-dark">
            <li>• Partner details to be added</li>
            <li>• Partnership scope</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-brand-dark">Partner Position</h3>
          <ul className="space-y-2 text-brand-dark">
            <li>• Partner details to be added</li>
            <li>• Partnership scope</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-brand-cream">
        <div className="flex justify-center space-x-8">
          <a href="https://acidic.com" className="text-brand-coral hover:text-brand-coral-light transition-colors">
            Website
          </a>
          <a href="https://twitter.com/acidic" className="text-brand-coral hover:text-brand-coral-light transition-colors">
            Twitter
          </a>
          <a href="mailto:contact@acidic.com" className="text-brand-coral hover:text-brand-coral-light transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </div>
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
