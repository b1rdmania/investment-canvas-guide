import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PresentationLayoutProps {
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const PresentationLayout = ({
  children,
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage
}: PresentationLayoutProps) => {
  return (
    <div className="min-h-screen bg-mono-100 flex items-center justify-center p-4">
      <div className="w-screen-90 h-screen-90 bg-white rounded-lg shadow-lg relative flex">
        <div className="absolute top-4 right-4 text-mono-400 text-sm">
          Page {currentPage} of {totalPages}
        </div>
        
        <button 
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 disabled:opacity-30"
        >
          <ChevronLeft className="w-8 h-8 text-mono-400" />
        </button>
        
        <button 
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 disabled:opacity-30"
        >
          <ChevronRight className="w-8 h-8 text-mono-400" />
        </button>
        
        <div className="flex-1 p-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PresentationLayout;