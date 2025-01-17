import React from 'react';

const TeamPage = () => (
  <div className="space-y-8">
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
  </div>
);

export default TeamPage;