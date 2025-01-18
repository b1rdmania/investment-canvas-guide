import React from 'react';

const NextStepsPage = () => (
  <div className="flex flex-col justify-center items-center h-full text-center space-y-12">
    <div className="max-w-2xl space-y-6">
      <div className="space-y-2">
        <p className="text-2xl text-brand-dark">
          We see what others
        </p>
        <p className="text-2xl text-brand-dark">
          Cannot - growing wealth through deals
        </p>
        <p className="text-2xl text-brand-dark">
          That build and return
        </p>
      </div>
    </div>
    
    <div className="flex justify-center space-x-8 text-sm">
      <a href="mailto:contact@acidic.com" className="text-brand-coral hover:text-brand-coral-light transition-colors">
        Email
      </a>
      <a href="https://acidic.com" className="text-brand-coral hover:text-brand-coral-light transition-colors">
        Website
      </a>
      <a href="https://twitter.com/acidic" className="text-brand-coral hover:text-brand-coral-light transition-colors">
        Twitter
      </a>
    </div>
  </div>
);

export default NextStepsPage;