import React, { useState } from 'react';
import PresentationLayout from '../components/PresentationLayout';
import DesignGuidelines from '../components/DesignGuidelines';

const Pages = [
  // Page 1: Executive Summary
  <div key="1" className="space-y-8">
    <h1 className="text-4xl font-bold text-mono-900">Acidic Labs Investment Deck</h1>
    <h2 className="text-2xl text-mono-700">Executive Summary</h2>
    <div className="text-xl text-mono-600">Vision Meets Capital</div>
    <p className="text-mono-700 max-w-3xl">
      An incubator fund investing at the convergence of Web3, AI, and creative industries that creates unfair advantage through technology partnerships and advisory expertise.
    </p>
  </div>,

  // Page 2: Why Now
  <div key="2" className="space-y-8">
    <h2 className="text-3xl font-bold text-mono-900">Why Now v1</h2>
    <div className="space-y-4">
      <h3 className="text-2xl text-mono-700">The $2.25tn creative economy is at breaking point:</h3>
      <ul className="space-y-4 text-mono-700">
        <li>• Current systems can't handle basic operations</li>
        <li>• AI driving 100x explosion in content creation</li>
        <li>• Even simple tech solutions revolutionary in this market</li>
        <li>• Web2 transformed how content moves, Web3 transforms how value flows.</li>
      </ul>
    </div>
  </div>,

  // Page 3: Our Edge
  <div key="3" className="space-y-8">
    <h2 className="text-3xl font-bold text-mono-900">Our Edge: Access & Execution</h2>
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-mono-700 mb-4">Direct Technical Access</h3>
        <ul className="space-y-2 text-mono-600">
          <li>• Embedded relationships with major blockchain teams</li>
          <li>• Pre-public visibility of technical projects</li>
          <li>• First look at protocol innovations</li>
          <li>• Shared Deal flow with Web3 & AI led VCs</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-mono-700 mb-4">Global Deal Capture</h3>
        <ul className="space-y-2 text-mono-600">
          <li>• Strategic event presence</li>
          <li>• Network of technical & ecosystem partners</li>
          <li>• Direct developer community relationships</li>
        </ul>
      </div>
    </div>
  </div>,

  // Page 4: Investment Focus
  <div key="4" className="space-y-8">
    <h2 className="text-3xl font-bold text-mono-900">Investment Focus</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-mono-700">Key Metrics</h3>
        <ul className="space-y-2 text-mono-600">
          <li>• 50-80 companies at pre-seed stage</li>
          <li>• $50K-$200K initial checks</li>
          <li>• Investing period - extending to 2 or 3 years</li>
          <li>• $6M follow-on reserve</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-mono-700">Target Returns</h3>
        <ul className="space-y-2 text-mono-600">
          <li>• 2% delivering 100x = $8M</li>
          <li>• 2% delivering 50x = $4M</li>
          <li>• 6% delivering 10x = $2.4M</li>
          <li>• Base return: 1.48x from first checks</li>
        </ul>
      </div>
    </div>
  </div>,

  // Page 5: Team
  <div key="5" className="space-y-8">
    <h2 className="text-3xl font-bold text-mono-900">Team</h2>
    <div className="grid grid-cols-3 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-mono-700">Andy</h3>
        <ul className="space-y-2 text-mono-600">
          <li>• Direct L1/L2 development experience</li>
          <li>• Chain partnership relationships</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-mono-700">Leo</h3>
        <ul className="space-y-2 text-mono-600">
          <li>• Fund operations background</li>
          <li>• Deal flow development</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-mono-700">Tim</h3>
        <ul className="space-y-2 text-mono-600">
          <li>• Regulatory expertise</li>
          <li>• Music industry integration</li>
        </ul>
      </div>
    </div>
  </div>,

  // Page 6: Fund Structure
  <div key="6" className="space-y-8">
    <h2 className="text-3xl font-bold text-mono-900">Fund Structure</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-mono-700">Terms</h3>
        <table className="w-full text-mono-600">
          <tbody>
            <tr className="border-b border-mono-200">
              <td className="py-2">Size</td>
              <td className="py-2">$10M</td>
            </tr>
            <tr className="border-b border-mono-200">
              <td className="py-2">Period</td>
              <td className="py-2">2024-2029</td>
            </tr>
            <tr className="border-b border-mono-200">
              <td className="py-2">Management</td>
              <td className="py-2">2%</td>
            </tr>
            <tr className="border-b border-mono-200">
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
        <h3 className="text-xl font-semibold text-mono-700">Timeline</h3>
        <ul className="space-y-2 text-mono-600">
          <li>• Q2 2024: First Close</li>
          <li>• Q3 2024: Initial Deployment</li>
          <li>• Q4 2024: Second Close</li>
        </ul>
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
      <DesignGuidelines />
    </PresentationLayout>
  );
};

export default Index;