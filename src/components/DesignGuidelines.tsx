import React from 'react';

interface DesignGuidelinesProps {
  currentPage: number;
}

const DesignGuidelines = ({ currentPage }: DesignGuidelinesProps) => {
  const getPageGuidelines = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <h4 className="font-semibold mb-2">Opening Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Centered logo with optimized size</li>
              <li>Clear tagline positioning</li>
              <li>Balanced vertical spacing</li>
            </ul>
          </>
        );
      case 2:
        return (
          <>
            <h4 className="font-semibold mb-2">Executive Summary Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Compact logo in header</li>
              <li>Two-column layout for vision/mission</li>
              <li>Consistent vertical rhythm</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <h4 className="font-semibold mb-2">Why Now Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>"$2.25tn" headline figure emphasis</li>
              <li>4 market dynamics points layout</li>
              <li>Breaking point visualization</li>
            </ul>
          </>
        );
      case 4:
        return (
          <>
            <h4 className="font-semibold mb-2">Deal Capture Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Global presence points</li>
              <li>Network visualization</li>
              <li>Strategic positioning elements</li>
            </ul>
          </>
        );
      case 5:
        return (
          <>
            <h4 className="font-semibold mb-2">Technical Access Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Partnership network display</li>
              <li>Technical relationships layout</li>
              <li>Value flow visualization</li>
            </ul>
          </>
        );
      case 6:
        return (
          <>
            <h4 className="font-semibold mb-2">Investment Focus Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Check size range display</li>
              <li>Target returns layout</li>
              <li>Key metrics visualization</li>
            </ul>
          </>
        );
      case 7:
        return (
          <>
            <h4 className="font-semibold mb-2">Team Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Team grid layout (3 core)</li>
              <li>Experience highlights</li>
              <li>Expertise visualization</li>
            </ul>
          </>
        );
      case 8:
        return (
          <>
            <h4 className="font-semibold mb-2">Fund Structure Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Terms summary table layout</li>
              <li>Timeline visualization</li>
              <li>Key dates arrangement</li>
            </ul>
          </>
        );
      case 9:
        return (
          <>
            <h4 className="font-semibold mb-2">Partners Page Guidelines</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li>Partner grid layout</li>
              <li>Contact information placement</li>
              <li>Social links styling</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute bottom-4 left-4 right-4 bg-mono-100 p-4 rounded text-xs text-mono-600 border border-mono-200">
      {getPageGuidelines()}
    </div>
  );
};

export default DesignGuidelines;
