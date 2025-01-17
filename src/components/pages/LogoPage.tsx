import React from 'react';

const LogoPage = () => (
  <div className="flex flex-col items-center justify-center h-full space-y-12 bg-brand-white">
    <img 
      src="/lovable-uploads/a8768ee1-3b39-4eaf-87b8-e6c89913763a.png" 
      alt="Acidic Labs Logo" 
      className="w-3/5 max-w-4xl"
    />
    <p className="text-2xl text-brand-dark text-center font-light max-w-3xl">
      Acidic Labs is an incubator fund investing at the convergence of Web3, AI, and creative industries
    </p>
  </div>
);

export default LogoPage;