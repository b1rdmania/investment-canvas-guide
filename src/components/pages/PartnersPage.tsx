import React from 'react';

const PartnersPage = () => (
  <div className="space-y-8">
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
);

export default PartnersPage;