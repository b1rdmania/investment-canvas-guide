import React from 'react';
import { Button } from '../ui/button';

const PartnersPage = () => (
  <div className="flex flex-col justify-between h-full">
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-brand-dark mb-12">Partners</h2>
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
    </div>
    
    <div className="mt-12 space-y-8">
      <Button 
        className="text-xl px-8 py-6 bg-brand-coral hover:bg-brand-coral-light text-white"
        onClick={() => window.location.href = 'mailto:contact@acidic.com'}
      >
        Contact Us
      </Button>
      
      <div className="flex justify-center space-x-8 text-sm">
        <a href="https://acidic.com" className="text-brand-coral hover:text-brand-coral-light transition-colors">
          Website
        </a>
        <a href="https://twitter.com/acidic" className="text-brand-coral hover:text-brand-coral-light transition-colors">
          Twitter
        </a>
      </div>
    </div>
  </div>
);

export default PartnersPage;