import React from 'react';

const InvestmentFocusPage = () => (
  <div className="space-y-8">
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
  </div>
);

export default InvestmentFocusPage;