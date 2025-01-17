import React from 'react';
import { Button } from '../ui/button';

const NextStepsPage = () => (
  <div className="flex flex-col justify-center items-center h-full text-center space-y-12">
    <div className="max-w-2xl space-y-6">
      <h2 className="text-4xl font-bold text-brand-dark">Next Steps</h2>
      <p className="text-xl text-brand-dark">
        If you are interested in learning more about our investment opportunities, 
        we invite you to schedule a meeting with our investment team.
      </p>
    </div>
    
    <div className="space-y-8">
      <Button 
        className="text-xl px-8 py-6 bg-brand-coral hover:bg-brand-coral-light text-white"
        onClick={() => window.location.href = 'mailto:contact@acidic.com'}
      >
        Schedule a Meeting
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

export default NextStepsPage;